import dayjs from 'dayjs';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';

export const Home = () => {
  return (
    <TimeLocationOfRide
      startDate={dayjs()}
      isCar={true}
      placeFrom='Piotrków Trybunalski'
      exactPlaceFrom='Więzienie'
      lengthInMinutes={232}
      placeTo='Radom'
      exactPlaceTo='Sąd'
    />
  );
};
