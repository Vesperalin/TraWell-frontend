import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import UsersService from '~/api/services/UsersService';
import { Paths } from '~/enums/Paths';
import { useAuth } from '~/hooks/useAuth';
import { StyledFormControl, StyledSkeleton } from './ChooseVehicle.style';

interface Props {
  value: number | null;
  setValue: (value: number | null) => void;
}

export const ChooseVehicle = ({ value, setValue }: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const { token } = useAuth();
  const {
    data: idUserData,
    refetch: refetchIdUserData,
    isError: isErrorUserData,
    isLoading: isLoadingUserData,
  } = UsersService.useGetMyId(token ? token : '');
  const {
    data: vehicles,
    refetch: refetchVehicles,
    isError: isErrorVehicles,
    isLoading: isLoadingVehicles,
  } = UsersService.useGetUserVehicles(token ? token : '', idUserData ? idUserData.user_id : -1);

  useEffect(() => {
    if (token) {
      refetchIdUserData();
    }
  }, [refetchIdUserData, token]);

  useEffect(() => {
    if (token && idUserData) {
      refetchVehicles();
    }
  }, [idUserData, refetchVehicles, token]);

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value != '-1') {
      setValue(Number(event.target.value));
    } else {
      setValue(null);
    }
  };

  if (isErrorUserData || isErrorVehicles) {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          text: 'Unexpected error appeared during retrieving data. Try again',
        }}
      />
    );
  }

  if (isLoadingUserData || isLoadingVehicles) {
    return (
      <StyledSkeleton
        variant='rectangular'
        height={40}
      />
    );
  }

  return (
    <StyledFormControl size={isSmallScreen ? 'small' : 'medium'}>
      {value === null && <InputLabel>Vehicle</InputLabel>}
      <Select
        id='choose-vehicle-dropdown'
        value={value ? value.toString() : ''}
        label={value === null ? 'Vehicle' : ''}
        onChange={handleChange}
        size={isSmallScreen ? 'small' : 'medium'}
      >
        {vehicles && Array.isArray(vehicles) ? (
          vehicles.map((vehicle) => {
            return (
              <MenuItem
                key={vehicle.vehicle_id}
                value={vehicle.vehicle_id}
              >
                {vehicle.make}, {vehicle.model}, {vehicle.color}
              </MenuItem>
            );
          })
        ) : (
          <Typography>No vehicles</Typography>
        )}
      </Select>
    </StyledFormControl>
  );
};
