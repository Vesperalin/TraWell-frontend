import { useQuery } from 'react-query';
import { usersClient } from '~/api/clients';
export default {
  useCheckIfUserRegistered: (token: string) => {
    return useQuery<unknown, Error>(
      ['token', token],
      async () => {
        const response = await usersClient.get<unknown>('request users/check_user/', {
          headers: { Authorization: token },
        });
        console.log(response.data);
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
