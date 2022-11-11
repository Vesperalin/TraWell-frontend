/* eslint-disable camelcase */
import { useQuery } from 'react-query';
import { reviewsClient } from '~/api/clients';

export default {
  useComment: (
    token: string,
    userId: number,
    ratedUserType: 'driver' | 'passenger',
    rideId: number,
    review: number,
    description: string,
  ) => {
    return useQuery<unknown, Error>(
      [],
      async () => {
        if (token) {
          const response = await reviewsClient.post<unknown>(
            `reviews/user_reviews/${userId}`,
            {
              rated_user_type: ratedUserType,
              ride: rideId,
              rating: review,
              description: description,
            },
            { headers: { Authorization: 'Bearer ' + token } },
          );
          return response.data;
        }
      },
      {
        enabled: false,
        refetchOnWindowFocus: false,
        retry: false,
        cacheTime: 0,
      },
    );
  },
};
