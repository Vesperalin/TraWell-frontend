import dayjs from 'dayjs';
import { UserSearchRideInputData } from '~/components/UserSearchRideInputData';

export const Home = () => {
  return (
    <UserSearchRideInputData
      placeFrom='Kołaczkówqqqqqqqqqqq'
      exactPlaceFrom='ul. Mazurska'
      placeTo='Baleszkowo'
      exactPlaceTo='koło restauracji "Egipt"'
      date={dayjs()}
    />
  );
};
