import { useParams } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';

export const SearchedRideForPassenger = () => {
  const { rideId } = useParams();
  const { data, isLoading } = RidesService.useRideForPassenger(rideId ? Number(rideId) : -1);

  console.log(data);
  return <div>{rideId}</div>;
};
