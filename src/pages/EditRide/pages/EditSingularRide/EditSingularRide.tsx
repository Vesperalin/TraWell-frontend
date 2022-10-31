import { Navigate, useParams } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';
import { Loader } from '~/components/Loader';
import { Paths } from '~/enums/Paths';
import { useAuth } from '~/hooks/useAuth';
import { FullRideEdit } from './components/FullRideEdit';

export const EditSingularRide = () => {
  const { rideId } = useParams();
  const { token } = useAuth();
  const { data, isError, error } = RidesService.useCheckEditionPermissionForSingularRide(
    rideId ? Number(rideId) : -1,
    token ? token : '',
  );

  if (isError) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((error as any).response.status === 404) {
      return (
        <Navigate
          to={Paths.Error}
          replace={true}
          state={{
            text: 'The drive is archival or do not exist.',
          }}
        />
      );
    } else {
      return (
        <Navigate
          to={Paths.Error}
          replace={true}
          state={{
            text: 'Unexpected error encountered.',
          }}
        />
      );
    }
  }
  if (data && data.full_permission) {
    return <FullRideEdit rideId={rideId ? Number(rideId) : -1} />;
  } else if (data) {
    return <div>EditSingularRide {rideId}</div>;
  } else {
    return <Loader />;
  }
};
