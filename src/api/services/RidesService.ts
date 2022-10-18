import { useQuery } from 'react-query';
import { ridesClient } from '~/api/clients';

// interface Response {
//   count: number;
//   nextIndex: number;
//   startIndex: number;
//   totalResults: number;
//   results: AutocompletePlace[];
// }

export default {
  useRides: (
    page: number,
    rideType: string,
    driverRate: number,
    priceFrom: number,
    priceTo: number,
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
    return useQuery<any, Error>(
      [
        'phrase',
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
        // eslint-disable-next-line max-len

        // const response = await ridesClient.get<any>(
        // eslint-disable-next-line max-len
        //   `rides/get_filtered/?ride_type=${rideType}&driver_rate=${driverRate}&price_from=${priceFrom}&price_to=${priceTo}&ordering=${ordering}&seats=${seats}&start_date=${startDate}&city_from_state=${cityFromState}&city_to_state=${cityToState}&city_from_county=${cityFromCounty}&city_to_county=${cityToCounty}&city_from_lat=${cityFromLat}&city_from_lng=${cityFromLon}&city_to_lat=${cityToLat}&city_to_lng=${cityToLon}&city_to=${cityTo}&city_from=${cityFrom}`,
        // );
        const response = await ridesClient.get<any>(
          // eslint-disable-next-line max-len
          'rides/get_filtered/?start_date=2022-10-20T03:36:22Z&city_to=Warta&city_from=Cielce&ordering=duration&city_from_state=Lodzkie&city_from_county=Warta&city_from_lat=18.111100&city_from_lng=53.111100&city_to_state=Lodzkie&city_to_county=Warta&city_to_lat=18.111100&city_to_lng=52.111100&driver_rate=4.5&ride_type=all&price_to=3&price_from=2.5&page=1',
        );
        console.log(response);
        return response.data;
      },
      // {
      //   enabled: false,
      //   refetchOnWindowFocus: false,
      //   retry: 3,
      // },
    );
  },
};
