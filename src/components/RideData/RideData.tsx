import { Dayjs } from 'dayjs';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';
import { User } from '~/components/User';
import { AdditionalRideInfo } from './components/AdditionalRideInfo';
import { Wrapper, InnerWrapper } from './RideData.style';

interface Props {
  startDate: Dayjs;
  isCar: boolean;
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
  isHistoryRide?: boolean;
}

export const RideData = ({
  startDate,
  isCar,
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
  isHistoryRide = false,
}: Props) => {
  return (
    <Wrapper onClick={() => console.log('to będzie przenosić do info o przejeździe')}>
      <TimeLocationOfRide
        startDate={startDate}
        isCar={isCar}
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
        {!isHistoryRide && (
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
