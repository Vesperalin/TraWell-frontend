import { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';
import { User } from '~/components/User';
import { AdditionalRideInfo } from './components/AdditionalRideInfo';
import { Wrapper, InnerWrapper } from './RideData.style';

interface Props {
  userId: number;
  rideId: number;
  startDate: Dayjs;
  placeFrom: string;
  exactPlaceFrom: string;
  lengthInMinutes: number;
  placeTo: string;
  exactPlaceTo: string;
  seats: number;
  takenSeats: number;
  cost: number;
  isAvatarFirstDesktop?: boolean;
  isAvatarFirstMobile?: boolean;
  name: string;
  imageSource: string;
  reviewMean: number;
  isHistoryRideAsPassenger?: boolean;
}

export const RideData = ({
  userId,
  rideId,
  startDate,
  placeFrom,
  exactPlaceFrom,
  lengthInMinutes,
  placeTo,
  exactPlaceTo,
  seats,
  takenSeats,
  cost,
  isAvatarFirstDesktop = false,
  isAvatarFirstMobile = false,
  name,
  imageSource,
  reviewMean,
  isHistoryRideAsPassenger = false,
}: Props) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/searched-ride/${rideId}`)}>
      <TimeLocationOfRide
        startDate={startDate}
        placeFrom={placeFrom}
        exactPlaceFrom={exactPlaceFrom}
        lengthInMinutes={lengthInMinutes}
        placeTo={placeTo}
        exactPlaceTo={exactPlaceTo}
      />
      <InnerWrapper>
        <AdditionalRideInfo
          seats={seats}
          takenSeats={takenSeats}
          cost={cost}
        />
        {!isHistoryRideAsPassenger && (
          <User
            userId={userId}
            isAvatarFirstDesktop={isAvatarFirstDesktop}
            isAvatarFirstMobile={isAvatarFirstMobile}
            name={name}
            imageSource={imageSource}
            reviewMean={reviewMean}
          />
        )}
      </InnerWrapper>
    </Wrapper>
  );
};
