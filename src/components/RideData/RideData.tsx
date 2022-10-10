import { Dayjs } from 'dayjs';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';
import { User } from '~/components/User';
import { AdditionalRideInfo } from './components/AdditionalRideInfo';
import { Wrapper, InnerWrapper } from './RideData.style';

interface Props {
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
  return (
    <Wrapper onClick={() => console.log('to będzie przenosić do info o przejeździe')}>
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
