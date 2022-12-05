/* eslint-disable max-len */
/* eslint-disable camelcase */
import { useQuery } from 'react-query';
import { ridesClient } from '~/api/clients';
import { FrequencyType } from '~/enums/FrequencyType';
import { Role } from '~/enums/Role';
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { DetailedOwnRecurrentRideData } from '~/models/Rides/DetailedOwnRecurrentRideData';
import { RideForPassengerResponse, RideForDriverResponse } from '~/models/Rides/DetailedRideData';
import { EditionPermissions } from '~/models/Rides/EditionPermissions';
import { OwnRideResponse } from '~/models/Rides/OwnRideResponse';
import { RequestsResponse } from '~/models/Rides/RequestsResponse';
import { RideResponse } from '~/models/Rides/RideResponse';
import { SingleRideInRecurrentRide } from '~/models/Rides/SingleRideInRecurrentRide';

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
    return useQuery<RideForPassengerResponse, Error>(
      ['rideForPassenger', rideId],
      async () => {
        const response = await ridesClient.get<RideForPassengerResponse>(`rides/${rideId}/`);
        return response.data;
      },
      {
        enabled: true,
        refetchOnWindowFocus: false,
      },
    );
  },
  useSingularRideForDriver: (rideId: number, token: string) => {
    return useQuery<RideForDriverResponse, Error>(
      ['singularRideForDriver', rideId],
      async () => {
        const response = await ridesClient.get<RideForDriverResponse>(`rides/${rideId}/`, {
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
  useRecurrentRideForDriver: (rideId: number, token: string) => {
    return useQuery<DetailedOwnRecurrentRideData, Error>(
      ['recurrentRideForDriver', rideId],
      async () => {
        const response = await ridesClient.get<DetailedOwnRecurrentRideData>(
          `recurrent_rides/${rideId}/`,
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
      ['ownRides', token, page, ordering, startDate, from, to, userType],
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

        const response = await ridesClient.get<OwnRideResponse>(
          // eslint-disable-next-line max-len
          `rides/user_rides/?page=${page}&ordering=${ordering}&user_type=${userType}${date}${cityFromState}${cityToState}${cityFromCounty}${cityToCounty}${cityFromLat}${cityFromLng}${cityToLat}${cityToLng}${cityTo}${cityFrom}`,
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

        const response = await ridesClient.get<OwnRideResponse>(
          // eslint-disable-next-line max-len
          `recurrent_rides/user_rides/?page=${page}&ordering=${ordering}${date}${cityFromState}${cityToState}${cityFromCounty}${cityToCounty}${cityFromLat}${cityFromLng}${cityToLat}${cityToLng}${cityTo}${cityFrom}`,
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
  useDeleteSingularRide: (rideId: number, token: string) => {
    return useQuery<unknown, Error>(
      [],
      async () => {
        const response = await ridesClient.delete<unknown>(`rides/${rideId}/`, {
          headers: { Authorization: 'Bearer ' + token },
        });
        return response.data;
      },
      {
        enabled: false,
        refetchOnWindowFocus: false,
        retry: 1,
        cacheTime: 0,
      },
    );
  },
  useDeleteRecurrentRide: (rideId: number, token: string) => {
    return useQuery<unknown, Error>(
      [],
      async () => {
        const response = await ridesClient.delete<unknown>(`recurrent_rides/${rideId}/`, {
          headers: { Authorization: 'Bearer ' + token },
        });
        return response.data;
      },
      {
        enabled: false,
        refetchOnWindowFocus: false,
        retry: 1,
        cacheTime: 0,
      },
    );
  },
  useAddSingularRide: (
    token: string | undefined,
    placeFrom: AutocompletePlace | null,
    placeTo: AutocompletePlace | null,
    areaFrom: string,
    areaTo: string,
    startDate: string | null,
    price: string | null,
    seats: string | null,
    vehicle: number | null,
    hours: string | null,
    minutes: string | null,
    description: string,
    coordinates: [number, number][],
    passengerAcceptance: string,
    hasRole: (role: Role) => boolean,
  ) => {
    return useQuery<unknown, Error>(
      [],
      async () => {
        if (
          token &&
          placeFrom &&
          placeTo &&
          startDate &&
          price &&
          seats &&
          hours !== null &&
          minutes !== null
        ) {
          const automaticConfirm = passengerAcceptance === 'automatic' ? true : false;
          const points: { lat: number; lng: number; sequence_no: number }[] = [];

          if (coordinates.length > 2) {
            coordinates.pop();
            coordinates.shift();

            for (let i = 0; i < coordinates.length; i++) {
              points.push({
                lat: Number(coordinates[i][0].toFixed(6)),
                lng: Number(coordinates[i][1].toFixed(6)),
                sequence_no: i + 1,
              });
            }
          }

          const response = await ridesClient.post<unknown>(
            'rides/',
            {
              city_from: {
                name: placeFrom.name,
                county: placeFrom.county,
                state: placeFrom.state,
                lat: placeFrom.lat,
                lng: placeFrom.lon,
              },
              city_to: {
                name: placeTo.name,
                county: placeTo.county,
                state: placeTo.state,
                lat: placeTo.lat,
                lng: placeTo.lon,
              },
              area_from: areaFrom,
              area_to: areaTo,
              start_date: startDate,
              price: Number(price),
              seats: Number(seats),
              vehicle: hasRole(Role.Private) ? vehicle : -1,
              duration: {
                hours: Number(hours),
                minutes: Number(minutes),
              },
              description: description,
              coordinates: points.length > 0 ? points : [],
              automatic_confirm: hasRole(Role.Company) ? automaticConfirm : false,
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
  useAddRecurrentRide: (
    token: string | undefined,
    placeFrom: AutocompletePlace | null,
    placeTo: AutocompletePlace | null,
    areaFrom: string,
    areaTo: string,
    startDate: string | null,
    endDate: string | null,
    frequencyType: FrequencyType,
    frequence: number | null,
    occurrences: Array<string>,
    price: string | null,
    seats: string | null,
    vehicle: number | null,
    hours: number | null,
    minutes: number | null,
    description: string,
    passengerAcceptance: string,
    hasRole: (role: Role) => boolean,
  ) => {
    return useQuery<unknown, Error>(
      [],
      async () => {
        if (
          token &&
          placeFrom &&
          placeTo &&
          startDate &&
          endDate &&
          frequencyType &&
          frequence &&
          occurrences &&
          price &&
          seats &&
          hours !== null &&
          minutes !== null
        ) {
          const automaticConfirm = passengerAcceptance === 'automatic' ? true : false;
          const points: { lat: number; lng: number; sequence_no: number }[] = [];

          const response = await ridesClient.post<unknown>(
            'recurrent_rides/',
            {
              city_from: {
                name: placeFrom.name,
                county: placeFrom.county,
                state: placeFrom.state,
                lat: placeFrom.lat,
                lng: placeFrom.lon,
              },
              city_to: {
                name: placeTo.name,
                county: placeTo.county,
                state: placeTo.state,
                lat: placeTo.lat,
                lng: placeTo.lon,
              },
              area_from: areaFrom,
              area_to: areaTo,
              start_date: startDate,
              end_date: endDate,
              frequencyType: frequencyType,
              frequence: frequence,
              occurrences: occurrences.map((elem) => elem.toUpperCase()),
              price: Number(price),
              seats: Number(seats),
              vehicle: hasRole(Role.Private) ? vehicle : -1,
              duration: {
                hours: Number(hours),
                minutes: Number(minutes),
              },
              description: description,
              coordinates: points.length > 0 ? points : [],
              automatic_confirm: hasRole(Role.Company) ? automaticConfirm : false,
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
  useCheckEditionPermissionForSingularRide: (rideId: number, token: string) => {
    return useQuery<EditionPermissions, Error>(
      ['permission-for-ride', rideId],
      async () => {
        const response = await ridesClient.get<EditionPermissions>(
          `rides/${rideId}/check_edition_permissions/`,
          {
            headers: { Authorization: 'Bearer ' + token },
          },
        );
        return response.data;
      },
      {
        refetchOnWindowFocus: false,
        retry: 1,
        cacheTime: 0,
      },
    );
  },
  useEditFullSingularRide: (
    rideId: number,
    token: string | undefined,
    placeFrom: AutocompletePlace | null,
    placeTo: AutocompletePlace | null,
    areaFrom: string,
    areaTo: string,
    startDate: string | null,
    price: string | null,
    seats: string | null,
    vehicle: number | null,
    hours: string | null,
    minutes: string | null,
    description: string,
    coordinates: [number, number][],
    passengerAcceptance: string,
    hasRole: (role: Role) => boolean,
  ) => {
    return useQuery<unknown, Error>(
      [],
      async () => {
        if (
          token &&
          placeFrom &&
          placeTo &&
          startDate &&
          price &&
          seats &&
          hours !== null &&
          minutes !== null
        ) {
          const automaticConfirm = passengerAcceptance === 'automatic' ? true : false;
          const points: { lat: number; lng: number; sequence_no: number }[] = [];

          if (coordinates.length > 2) {
            coordinates.pop();
            coordinates.shift();

            for (let i = 0; i < coordinates.length; i++) {
              points.push({
                lat: Number(coordinates[i][0].toFixed(6)),
                lng: Number(coordinates[i][1].toFixed(6)),
                sequence_no: i + 1,
              });
            }
          }

          const response = await ridesClient.patch<unknown>(
            `rides/${rideId}/`,
            {
              city_from: {
                name: placeFrom.name,
                county: placeFrom.county,
                state: placeFrom.state,
                lat: placeFrom.lat,
                lng: placeFrom.lon,
              },
              city_to: {
                name: placeTo.name,
                county: placeTo.county,
                state: placeTo.state,
                lat: placeTo.lat,
                lng: placeTo.lon,
              },
              area_from: areaFrom,
              area_to: areaTo,
              start_date: startDate,
              price: Number(price),
              seats: Number(seats),
              vehicle: hasRole(Role.Private) ? vehicle : -1,
              duration: {
                hours: Number(hours),
                minutes: Number(minutes),
              },
              description: description,
              coordinates: points.length > 0 ? points : [],
              automatic_confirm: hasRole(Role.Company) ? automaticConfirm : false,
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
  useEditPartialSingularRide: (
    rideId: number,
    token: string | undefined,
    seats: string | null,
    vehicle: number | null,
    description: string,
    passengerAcceptance: string,
    hasRole: (role: Role) => boolean,
  ) => {
    return useQuery<unknown, Error>(
      [],
      async () => {
        if (token && seats) {
          const automaticConfirm = passengerAcceptance === 'automatic' ? true : false;

          const response = await ridesClient.patch<unknown>(
            `rides/${rideId}/`,
            {
              seats: Number(seats),
              vehicle: hasRole(Role.Private) ? vehicle : -1,
              description: description,
              automatic_confirm: hasRole(Role.Company) ? automaticConfirm : false,
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
  useEditRecurrentRide: (
    rideId: number,
    token: string | undefined,
    seats: string | null,
    vehicle: number | null,
    description: string,
    passengerAcceptance: string,
    hasRole: (role: Role) => boolean,
  ) => {
    return useQuery<unknown, Error>(
      [],
      async () => {
        if (token && seats) {
          const automaticConfirm = passengerAcceptance === 'automatic' ? true : false;

          const response = await ridesClient.patch<unknown>(
            `recurrent_rides/${rideId}/`,
            {
              seats: Number(seats),
              vehicle: hasRole(Role.Private) ? vehicle : -1,
              description: description,
              automatic_confirm: hasRole(Role.Company) ? automaticConfirm : false,
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
  useMyRequests: (
    page: number,
    token: string | undefined,
    ordering: string,
    startDate: string | null,
    from: AutocompletePlace | null,
    to: AutocompletePlace | null,
    requestStatus: string | null,
  ) => {
    return useQuery<RequestsResponse | undefined, Error>(
      ['myRequests', page, ordering, startDate, from, to, requestStatus],
      async () => {
        const date = startDate ? `&start_date=${startDate}` : '';
        const cityFromState = from ? `&city_from_state=${from.state}` : '';
        const cityToState = to ? `&city_to_state=${to.state}` : '';
        const cityFromCounty = from ? `&city_from_county=${from.county}` : '';
        const cityToCounty = to ? `&city_to_county=${to.county}` : '';
        const cityFromLat = from ? `&city_from_lat=${from.lat}` : '';
        const cityFromLon = from ? `&city_from_lng=${from.lon}` : '';
        const cityToLat = to ? `&city_to_lat=${to.lat}` : '';
        const cityToLon = to ? `&city_to_lng=${to.lon}` : '';
        const cityTo = to ? `&city_to=${to.name}` : '';
        const cityFrom = from ? `&city_from=${from.name}` : '';
        const status = requestStatus ? `&decision=${requestStatus}` : '';

        const response = await ridesClient.get<RequestsResponse>(
          `requests/my_requests/?page=${page}&ordering=${ordering}${date}${cityFromState}${cityToState}${cityFromCounty}${cityToCounty}${cityFromLat}${cityFromLon}${cityToLat}${cityToLon}${cityTo}${cityFrom}${status}`,
          {
            headers: { Authorization: 'Bearer ' + token },
          },
        );
        return response.data;
      },
    );
  },
  usePendingRequests: (
    page: number,
    token: string | undefined,
    ordering: string,
    startDate: string | null,
    from: AutocompletePlace | null,
    to: AutocompletePlace | null,
  ) => {
    return useQuery<RequestsResponse | undefined, Error>(
      ['pendingRequests', page, ordering, startDate, from, to],
      async () => {
        const date = startDate ? `&start_date=${startDate}` : '';
        const cityFromState = from ? `&city_from_state=${from.state}` : '';
        const cityToState = to ? `&city_to_state=${to.state}` : '';
        const cityFromCounty = from ? `&city_from_county=${from.county}` : '';
        const cityToCounty = to ? `&city_to_county=${to.county}` : '';
        const cityFromLat = from ? `&city_from_lat=${from.lat}` : '';
        const cityFromLon = from ? `&city_from_lng=${from.lon}` : '';
        const cityToLat = to ? `&city_to_lat=${to.lat}` : '';
        const cityToLon = to ? `&city_to_lng=${to.lon}` : '';
        const cityTo = to ? `&city_to=${to.name}` : '';
        const cityFrom = from ? `&city_from=${from.name}` : '';

        const response = await ridesClient.get<RequestsResponse>(
          `requests/pending_requests/?page=${page}&ordering=${ordering}${date}${cityFromState}${cityToState}${cityFromCounty}${cityToCounty}${cityFromLat}${cityFromLon}${cityToLat}${cityToLon}${cityTo}${cityFrom}${status}`,
          {
            headers: { Authorization: 'Bearer ' + token },
          },
        );
        return response.data;
      },
    );
  },
  useGetNextRidesInRecurrentRide: (
    token: string | undefined,
    startDate: string | null,
    id: number | undefined,
  ) => {
    return useQuery<SingleRideInRecurrentRide[], Error>(
      ['nextRides', id, startDate],
      async () => {
        const date = startDate !== null ? `?single_start_date=${startDate}` : '';

        const response = await ridesClient.get<SingleRideInRecurrentRide[]>(
          `recurrent_rides/${id}/single_rides/${date}`,
          {
            headers: { Authorization: 'Bearer ' + token },
          },
        );
        return response.data;
      },
      {
        enabled: false,
        refetchOnWindowFocus: false,
        retry: false,
      },
    );
  },
};
