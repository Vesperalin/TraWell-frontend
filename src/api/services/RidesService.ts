import { useQuery } from 'react-query';
import { ridesClient } from '~/api/clients';
import { OwnRideResponse } from '~/models/Rides/OwnRideResponse';
import { RideForPassengerResponse } from '~/models/Rides/RideForPassengerResponse';
import { RideResponse } from '~/models/Rides/RideResponse';

export default {
  useRides: (
    page: number,
    rideType: string,
    driverRate: number | undefined,
    priceFrom: number | undefined,
    priceTo: number | undefined,
    ordering: string,
    cityFrom: string,
    cityFromState: string,
    cityFromCounty: string,
    cityFromLat: string,
    cityFromLon: string,
    cityTo: string,
    cityToState: string,
    cityToCounty: string,
    cityToLat: string,
    cityToLon: string,
    seats: number,
    startDate: string,
  ) => {
    return useQuery<RideResponse, Error>(
      [
        'rides-for-parameters',
        page,
        rideType,
        driverRate,
        priceFrom,
        priceTo,
        ordering,
        cityFrom,
        cityFromState,
        cityFromCounty,
        cityFromLat,
        cityFromLon,
        cityTo,
        cityToState,
        cityToCounty,
        cityToLat,
        cityToLon,
        seats,
        startDate,
      ],
      async () => {
        const driverRateChecked = driverRate ? `&driver_rate=${driverRate}` : '';
        const priceFromChecked = priceFrom ? `&price_from=${priceFrom}` : '';
        const priceToChecked = priceTo ? `&price_to=${priceTo}` : '';

        const response = await ridesClient.get<RideResponse>(
          // eslint-disable-next-line max-len
          `rides/get_filtered/?page=${page}&seats=${seats}&start_date=${startDate}&city_from_state=${cityFromState}&city_to_state=${cityToState}&city_from_county=${cityFromCounty}&city_to_county=${cityToCounty}&city_from_lat=${cityFromLat}&city_from_lng=${cityFromLon}&city_to_lat=${cityToLat}&city_to_lng=${cityToLon}&city_to=${cityTo}&city_from=${cityFrom}${driverRateChecked}${priceFromChecked}${priceToChecked}&ordering=${ordering}&ride_type=${rideType}`,
        );

        return response.data;
      },
    );
  },
  useRideForPassenger: (rideId: number) => {
    return useQuery<RideForPassengerResponse, Error>(['rideForPassenger', rideId], async () => {
      const response = await ridesClient.get<RideForPassengerResponse>(`rides/${rideId}/`);
      return response.data;
    });
  },
  useOwnRides: (page: number, userId: number) => {
    return useQuery<OwnRideResponse, Error>([`ownRides-${userId}`, userId, page], async () => {
      const response = await ridesClient.get<OwnRideResponse>(
        `rides/user_rides/${userId}/?page=${page}`,
      );
      return response.data;
    });
  },
};
