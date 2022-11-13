/* eslint-disable camelcase */
import { useQuery } from 'react-query';
import { reviewsClient } from '~/api/clients';
import { CommentsResponse } from '~/models/Comments/CommentsResponse';
import { NotRatedRides } from '~/models/Comments/NotRatedRides';

export default {
  useAddComment: (
    token: string,
    userId: number,
    ratedUserType: string,
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
  useComments: (
    page: number,
    token: string | undefined,
    userId: number | undefined,
    userType: string,
    ratingOrder: string,
    reviewFrom: string,
    reviewTo: string,
  ) => {
    return useQuery<CommentsResponse, Error>(
      ['comments-for-parameters', page, token, userId, userType, ratingOrder, reviewFrom, reviewTo],
      async () => {
        const ratingFrom = reviewFrom.length > 0 ? `&rating_from=${reviewFrom}` : '';
        const ratingTo = reviewTo.length > 0 ? `&rating_to=${reviewTo}` : '';

        const response = await reviewsClient.get<CommentsResponse>(
          // eslint-disable-next-line max-len
          `reviews/user_reviews/${userId}?page=${page}&user_type=${userType}&rating_order=${ratingOrder}${ratingFrom}${ratingTo}`,
          { headers: { Authorization: 'Bearer ' + token } },
        );

        return response.data;
      },
      {
        enabled: false,
        refetchOnWindowFocus: false,
      },
    );
  },
  useNotRatedRides: (token: string | undefined, userId: number | undefined) => {
    return useQuery<NotRatedRides[], Error>(
      ['not-rated-rides', userId, token],
      async () => {
        const response = await reviewsClient.get<NotRatedRides[]>(`rides/${userId}`, {
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
