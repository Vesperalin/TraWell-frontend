import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import UsersService from '~/api/services/UsersService';
import car from '~/assets/images/carDriving.webp';
import { Loader } from '~/components/Loader';
import { Paths } from '~/enums/Paths';
import {
  Wrapper,
  VehicleWrapper,
  TrashIcon,
  VehicleDescription,
  StyledImage,
} from './MyVehicles.style';

interface Props {
  token: string;
  userId: number;
}

export const MyVehicles = ({ token, userId }: Props) => {
  const { data, isLoading, isError, refetch } = UsersService.useGetUserVehicles(token, userId);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
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
  } else if (data) {
    return (
      <Wrapper>
        {data.map((vehicle) => (
          <VehicleWrapper key={vehicle.vehicle_id}>
            <VehicleDescription variant='h5'>
              {vehicle.make} {vehicle.model} {vehicle.color}
            </VehicleDescription>
            <TrashIcon />
          </VehicleWrapper>
        ))}
        <StyledImage
          alt='car-driving'
          src={car}
        />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};
