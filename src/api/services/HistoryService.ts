/* eslint-disable camelcase */
import { useQuery } from 'react-query';
import { historyClient } from '~/api/clients';
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { DetailedOwnRecurrentRideData } from '~/models/Rides/DetailedOwnRecurrentRideData';
import { RideForDriverResponse, RideForPassengerResponse } from '~/models/Rides/DetailedRideData';
import { OwnRideResponse } from '~/models/Rides/OwnRideResponse';

export default {
  useOwnSingularRides: (
    page: number,
    token: string,
    ordering: string,
    startDate: string | undefined,
    from: AutocompletePlace | null,
    to: AutocompletePlace | null,
    userType: 'driver' | 'passenger',
  ) => {
    return useQuery<OwnRideResponse, Error>(
      ['ownHistoryRides', token, page, ordering, startDate, from, to, userType],
      async () => {
        const date = startDate !== '' ? `&start_date=${startDate}` : '';
        const cityFromState = from ? `&city_from_state=${from.state}` : '';
        const cityToState = to ? `&city_to_state=${to.state}` : '';
        const cityFromCounty = from ? `&city_from_county=${from.county}` : '';
        const cityToCounty = to ? `&city_to_county=${to.county}` : '';
        const cityFromLat = from ? `&city_from_lat=${from.lat}` : '';
        const cityFromLng = from ? `&city_from_lng=${from.lon}` : '';
        const cityToLat = to ? `&city_to_lat=${to.lat}` : '';
        const cityToLng = to ? `&city_to_lng=${to.lon}` : '';
        const cityTo = to ? `&city_to=${to.name}` : '';
        const cityFrom = from ? `&city_from=${from.name}` : '';

        const response = await historyClient.get<OwnRideResponse>(
          // eslint-disable-next-line max-len
          `history_rides/user_rides/?page=${page}&ordering=${ordering}&user_type=${userType}${date}${cityFromState}${cityToState}${cityFromCounty}${cityToCounty}${cityFromLat}${cityFromLng}${cityToLat}${cityToLng}${cityTo}${cityFrom}`,
          { headers: { Authorization: 'Bearer ' + token } },
        );

        return response.data;
      },
      {
        enabled: true,
        refetchOnWindowFocus: false,
      },
    );
  },
  useRideForPassenger: (rideId: number) => {
    return useQuery<RideForPassengerResponse, Error>(['rideForPassenger', rideId], async () => {
      const response = await historyClient.get<RideForPassengerResponse>(
        `history_rides/${rideId}/`,
      );
      return response.data;
    });
  },
  useOwnRecurrentRides: (
    page: number,
    token: string,
    ordering: string,
    startDate: string | undefined,
    from: AutocompletePlace | null,
    to: AutocompletePlace | null,
  ) => {
    return useQuery<OwnRideResponse, Error>(
      ['ownRides', token, page, ordering, from, to, startDate],
      async () => {
        const date = startDate !== '' ? `&start_date=${startDate}` : '';
        const cityFromState = from ? `&city_from_state=${from.state}` : '';
        const cityToState = to ? `&city_to_state=${to.state}` : '';
        const cityFromCounty = from ? `&city_from_county=${from.county}` : '';
        const cityToCounty = to ? `&city_to_county=${to.county}` : '';
        const cityFromLat = from ? `&city_from_lat=${from.lat}` : '';
        const cityFromLng = from ? `&city_from_lng=${from.lon}` : '';
        const cityToLat = to ? `&city_to_lat=${to.lat}` : '';
        const cityToLng = to ? `&city_to_lng=${to.lon}` : '';
        const cityTo = to ? `&city_to=${to.name}` : '';
        const cityFrom = from ? `&city_from=${from.name}` : '';

        const response = await historyClient.get<OwnRideResponse>(
          // eslint-disable-next-line max-len
          `history_recurrent_rides/user_rides/?page=${page}&ordering=${ordering}${date}${cityFromState}${cityToState}${cityFromCounty}${cityToCounty}${cityFromLat}${cityFromLng}${cityToLat}${cityToLng}${cityTo}${cityFrom}`,
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
  useSingularRideForDriver: (rideId: number, token: string) => {
    return useQuery<RideForDriverResponse, Error>(
      ['singularRideForDriver', rideId],
      async () => {
        const response = await historyClient.get<RideForDriverResponse>(
          `history_rides/${rideId}/`,
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
  useRecurrentRideForDriver: (rideId: number, token: string) => {
    return useQuery<DetailedOwnRecurrentRideData, Error>(
      ['recurrentRideForDriver', rideId],
      async () => {
        const response = await historyClient.get<DetailedOwnRecurrentRideData>(
          `history_recurrent_rides/${rideId}/`,
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
};
