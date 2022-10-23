import Skeleton from '@mui/material/Skeleton';
import { User } from '~/components/User';
import { Text, Wrapper, AvatarWrapper, TextWrapper } from './AdditionalRideInfo.style';

interface Props {
  isLoading: boolean;
  seats: number | undefined;
  takenSeats: number | undefined;
  cost: number | undefined;
  name: string | undefined;
  imageSource: string | undefined;
  reviewMean: number | undefined;
}

export const AdditionalRideInfo = ({
  isLoading,
  seats,
  takenSeats,
  cost,
  name,
  imageSource,
  reviewMean,
}: Props) => {
  if (isLoading || !seats || !takenSeats || !cost || !name || !imageSource || !reviewMean) {
    return (
      <Wrapper>
        <Skeleton
          variant='rectangular'
          height={110}
          width={150}
          sx={{ display: { xs: 'none', md: 'block' } }}
        />
        <Skeleton
          variant='rectangular'
          height={60}
          sx={{ display: { xs: 'block', md: 'none' }, width: '100%' }}
        />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <TextWrapper>
          <Text variant='h4'>
            Available seats:&nbsp;
            <span>
              {takenSeats}/{seats}
            </span>
          </Text>
          <Text variant='h4'>
            Price:&nbsp;
            <span>{cost.toFixed(2)}zł</span>
          </Text>
        </TextWrapper>
        <AvatarWrapper>
          <User
            isAvatarFirstDesktop={false}
            isAvatarFirstMobile={false}
            name={name}
            imageSource={imageSource}
            reviewMean={reviewMean}
          />
        </AvatarWrapper>
      </Wrapper>
    );
  }
};
