import { useQuery } from 'react-query';
import { usersClient } from '~/api/clients';
import { User } from '~/models/Users/User';
import { Vehicle } from '~/models/Users/Vehicle';

export default {
  useGetMyId: (token: string) => {
    return useQuery<{ user_id: number }, Error>(
      ['me', token],
      async () => {
        const response = await usersClient.get<{ user_id: number }>('users/me', {
          headers: { Authorization: 'Bearer ' + token },
        });
        return response.data;
      },
      {
        enabled: false,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    );
  },
  useGetUserData: (token: string, userId: number) => {
    return useQuery<User, Error>(
      ['user', userId],
      async () => {
        const response = await usersClient.get<User>(`users/${userId}`, {
          headers: { Authorization: 'Bearer ' + token },
        });
        return response.data;
      },
      {
        enabled: false,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    );
  },
  useGetUserVehicles: (token: string, userId: number) => {
    return useQuery<Vehicle[], Error>(
      [],
      async () => {
        const response = await usersClient.get<Vehicle[]>(`vehicles/user_vehicles/${userId}`, {
          headers: { Authorization: 'Bearer ' + token },
        });
        return response.data;
      },
      {
        enabled: false,
        refetchOnWindowFocus: false,
      },
    );
  },
  useAddVehicle: (token: string, userId: number, make: string, model: string, color: string) => {
    return useQuery<unknown, Error>(
      [],
      async () => {
        const response = await usersClient.post<unknown>(
          `vehicles/user_vehicles/${userId}`,
          { make: make, model: model, color: color },
          {
            headers: { Authorization: 'Bearer ' + token },
          },
        );
        return response.data;
      },
      {
        enabled: false,
        refetchOnWindowFocus: false,
      },
    );
  },
  useDeleteVehicle: (token: string, carId: number) => {
    return useQuery<unknown, Error>(
      [],
      async () => {
        const response = await usersClient.delete<unknown>(`vehicles/${carId}`, {
          headers: { Authorization: 'Bearer ' + token },
        });
        return response.data;
      },
      {
        enabled: false,
        refetchOnWindowFocus: false,
      },
    );
  },
};
