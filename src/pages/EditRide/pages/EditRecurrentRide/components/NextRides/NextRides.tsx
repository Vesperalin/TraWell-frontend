import { Skeleton } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useEffect, useState } from 'react';
import RidesService from '~/api/services/RidesService';
import { DateFilter } from '~/components/Filter/components/DateFilter';
import { TypeOfFilter } from '~/components/Filter/enums/TypeOfFilter';
import { DateFilterType } from '~/components/Filter/models/FilterType';
import { useAuth } from '~/hooks/useAuth';
import { transformToFullDate } from '~/utils/TransformToFullDate';
import { Ride } from '../Ride';
import {
  Wrapper,
  Label,
  RidesWrapper,
  RideWrapper,
  NoPassengersLabel,
  NoPassengersLabelWrapper,
  DateWrapper,
} from './NextRides.style';

interface Props {
  id: string | undefined;
}

export const NextRides = ({ id }: Props) => {
  const { token } = useAuth();
  const [dataValue, setDataValue] = useState<Dayjs | null>(null);
  dayjs.extend(utc);
  let dateAndTime = '';

  if (dataValue) {
    dateAndTime = transformToFullDate(
      dataValue,
      dayjs().hour(0).minute(0).second(0).millisecond(0),
    );
  }

  const { isLoading, data, refetch } = RidesService.useGetNextRidesInRecurrentRide(
    token,
    dataValue !== null ? dateAndTime : null,
    id ? Number(id) : undefined,
  );

  useEffect(() => {
    if (token && id) {
      refetch();
    }
  }, [id, refetch, token, dataValue]);

  if (isLoading && !data) {
    return (
      <Skeleton
        variant='rectangular'
        width={255}
        height={350}
      />
    );
  } else {
    return (
      <Wrapper>
        <Label variant='h4'>Single rides</Label>
        <DateWrapper>
          <DateFilter
            filter={
              {
                type: TypeOfFilter.DateFilter,
                value: dataValue,
                setValue: setDataValue,
              } as DateFilterType
            }
          />
        </DateWrapper>
        {data && data.length > 0 ? (
          <RidesWrapper>
            {data &&
              data.map((ride) => {
                return (
                  <RideWrapper key={ride.ride_id}>
                    <Ride
                      date={ride.start_date}
                      id={ride.ride_id}
                      refetchSingular={refetch}
                    />
                  </RideWrapper>
                );
              })}
          </RidesWrapper>
        ) : (
          <NoPassengersLabelWrapper>
            <NoPassengersLabel variant='h4'>No rides found</NoPassengersLabel>
          </NoPassengersLabelWrapper>
        )}
      </Wrapper>
    );
  }
};
