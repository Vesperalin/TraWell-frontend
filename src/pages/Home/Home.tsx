import dayjs from 'dayjs';
import { RideType } from '~/enums/RideType';
import { Ride } from '../OwnRides/components/Ride';

export const Home = () => {
  return (
    <Ride
      startDate={dayjs()}
      isCar={false}
      placeFrom='Wadowice'
      exactPlaceFrom='pomnik JP2'
      lengthInMinutes={40}
      placeTo='Radomsko'
      exactPlaceTo='dom sołtysa'
      rideType={RideType.Singular}
    />
  );
};
