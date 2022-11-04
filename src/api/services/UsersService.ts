import { useQuery } from 'react-query';
import { usersClient } from '~/api/clients';
import { User } from '~/models/Users/User';

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
};
