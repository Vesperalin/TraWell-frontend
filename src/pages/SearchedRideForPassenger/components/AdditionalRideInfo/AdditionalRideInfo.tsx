import { User } from '~/components/User';
import {
  Text,
  Wrapper,
  AvatarWrapper,
  TextWrapper,
  DesktopSkeleton,
  MobileSkeleton,
} from './AdditionalRideInfo.style';

interface Props {
  isLoading: boolean;
  seats: number | undefined;
  availableSeats: number | undefined;
  cost: number | undefined;
  name: string | undefined;
  imageSource: string | undefined;
  reviewMean: number | undefined;
}

export const AdditionalRideInfo = ({
  isLoading,
  seats,
  availableSeats,
  cost,
  name,
  imageSource,
  reviewMean,
}: Props) => {
  if (isLoading || !seats || !availableSeats || !cost || !name || !reviewMean) {
    return (
      <Wrapper>
        <DesktopSkeleton
          variant='rectangular'
          height={110}
          width={150}
        />
        <MobileSkeleton
          variant='rectangular'
          height={60}
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
              {availableSeats}/{seats}
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
            imageSource={imageSource as string}
            reviewMean={reviewMean}
          />
        </AvatarWrapper>
      </Wrapper>
    );
  }
};
