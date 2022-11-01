import { Skeleton } from '@mui/material';
import { User } from '~/components/User';
import { Passenger } from '~/models/Rides/Passenger';
import {
  Wrapper,
  Label,
  AvatarsWrapper,
  AvatarWrapper,
  NoPassengersLabel,
  NoPassengersLabelWrapper,
} from './Passengers.style';

interface Props {
  isLoading: boolean;
  passengers: Passenger[] | undefined;
}

export const Passengers = ({ isLoading, passengers }: Props) => {
  if (isLoading && !passengers) {
    return (
      <Skeleton
        variant='rectangular'
        width={255}
        height={300}
      />
    );
  } else {
    return (
      <Wrapper>
        <Label variant='h4'>Passengers</Label>
        {passengers && passengers.length > 0 ? (
          <AvatarsWrapper>
            {passengers &&
              passengers.map((passenger) => {
                return (
                  <AvatarWrapper key={passenger.user_id}>
                    <User
                      isAvatarFirstDesktop={true}
                      isAvatarFirstMobile={true}
                      name={`${passenger.user.first_name}`}
                      imageSource={passenger.user.avatar}
                      reviewMean={Number(passenger.user.avg_rate)}
                    />
                  </AvatarWrapper>
                );
              })}
          </AvatarsWrapper>
        ) : (
          <NoPassengersLabelWrapper>
            <NoPassengersLabel variant='h4'>No passengers yet</NoPassengersLabel>
          </NoPassengersLabelWrapper>
        )}
      </Wrapper>
    );
  }
};
