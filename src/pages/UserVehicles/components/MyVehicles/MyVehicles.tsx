import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import UsersService from '~/api/services/UsersService';
import car from '~/assets/images/carDriving.webp';
import { Loader } from '~/components/Loader';
import { Paths } from '~/enums/Paths';
import { useAuth } from '~/hooks/useAuth';
import { Vehicle } from '../Vehicle';
import { Wrapper, StyledImage, NoVehicles } from './MyVehicles.style';

export const MyVehicles = () => {
  const { token } = useAuth();
  const {
    isLoading: isLoadingId,
    refetch: refetchMyId,
    data: myIdData,
  } = UsersService.useGetMyId(token ? token : '');
  const { data, isLoading, isError, refetch } = UsersService.useGetUserVehicles(
    token ? token : '',
    myIdData ? myIdData.user_id : -1,
  );

  useEffect(() => {
    if (token) {
      refetchMyId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    if (myIdData) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myIdData]);

  if (isLoading || isLoadingId) {
    return <Loader />;
  } else if (isError) {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          text: 'Unexpected error appeared during retrieving data. Try again',
        }}
      />
    );
  } else if (data && !isLoading && !isError) {
    return (
      <Wrapper>
        {Array.isArray(data) && (
          <>
            {data.map((vehicle) => (
              <Vehicle
                key={vehicle.vehicle_id}
                token={token ? token : ''}
                id={vehicle.vehicle_id}
                make={vehicle.make}
                model={vehicle.model}
                color={vehicle.color}
                refetchVehicles={refetch}
              />
            ))}
            <StyledImage
              alt='car-driving'
              src={car}
            />
          </>
        )}
        {!Array.isArray(data) && <NoVehicles variant='h4'>No vehicles</NoVehicles>}
      </Wrapper>
    );
  } else {
    return <></>;
  }
};
