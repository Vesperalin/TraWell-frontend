import Pagination from '@mui/material/Pagination';
import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import HistoryService from '~/api/services/HistoryService';
import { DesktopFilter, MobileFilter } from '~/components/Filter';
import { TypeOfFilter } from '~/components/Filter/enums/TypeOfFilter';
import {
  FilterType,
  DateFilterType,
  TimeFilterType,
  InputFilterType,
} from '~/components/Filter/models/FilterType';
import { Loader } from '~/components/Loader';
import { Sort } from '~/components/Sort';
import { SortElement } from '~/components/Sort/models/SortElement';
import { Paths } from '~/enums/Paths';
import { RideType } from '~/enums/RideType';
import { useAuth } from '~/hooks/useAuth';
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { transformToFullDate } from '~/utils/TransformToFullDate';
import { RecurrentRide } from '../RecurrentRide';
import {
  Rides,
  SortAndFiltersComponent,
  Content,
  NoRidesWrapper,
  PaginationWrapper,
} from './RidesRecurrentAsDriver.style';

const sortElements: SortElement[] = [
  { label: 'Duration: highest first', value: '-duration' },
  { label: 'Duration: lowest first', value: 'duration' },
  { label: 'Date: highest first', value: '-start_date' },
  { label: 'Date: lowest first', value: 'start_date' },
];

export const RidesRecurrentAsDriver = () => {
  const { token } = useAuth();
  const { page } = useParams();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const initialSortValue = 'start_date';
  const [sortKey, setSortKey] = useState<string>(initialSortValue);
  const [filterDate, setFilterDate] = useState<Dayjs | null>(null);
  const [filterTime, setFilterTime] = useState<Dayjs | null>(null);
  const [from, setFrom] = useState<AutocompletePlace | null>(null);
  const [to, setTo] = useState<AutocompletePlace | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(page ? Number(page) : 1);
  let dateAndTime: string;
  dayjs.extend(utc);

  if (filterDate && filterTime) {
    dateAndTime = transformToFullDate(filterDate, filterTime);
  } else if (filterDate) {
    dateAndTime = filterDate.utc().format();
  } else {
    dateAndTime = '';
  }

  const {
    isLoading: isLoadingRecurrentRide,
    data: recurrentRideData,
    isError: isErrorRecurrentRide,
    refetch: refetchRecurrentRideData,
  } = HistoryService.useOwnRecurrentRides(
    currentPage,
    token ? token : '',
    sortKey,
    dateAndTime,
    from,
    to,
  );

  useEffect(() => {
    refetchRecurrentRideData();
  }, [dateAndTime, from, to, refetchRecurrentRideData, sortKey, currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(1);
    navigate('/history-rides/1/1');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterDate, filterTime, from, to]);

  if (isErrorRecurrentRide) {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          // eslint-disable-next-line max-len
          text: 'Unexpected error appeared during retrieving data about own recurrent rides. Try again',
        }}
      />
    );
  }

  const filters: FilterType[] = [
    {
      type: TypeOfFilter.DateFilter,
      value: filterDate,
      setValue: setFilterDate,
    } as DateFilterType,
    {
      type: TypeOfFilter.TimeFilter,
      value: filterTime,
      setValue: setFilterTime,
    } as TimeFilterType,
    {
      type: TypeOfFilter.InputFilter,
      from: from,
      setFrom: setFrom,
      to: to,
      setTo: setTo,
    } as InputFilterType,
  ];

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(value);
    navigate(`/history-rides/1/${value}`);
  };

  const renderRecurrentRides = () => {
    if (isLoadingRecurrentRide) {
      return <Loader />;
    } else if (
      !isLoadingRecurrentRide &&
      recurrentRideData &&
      recurrentRideData.results.length > 0
    ) {
      const rides = recurrentRideData.results.map((result) => (
        <RecurrentRide
          key={result.ride_id}
          rideId={result.ride_id}
          startDate={dayjs(result.start_date)}
          placeFrom={result.city_from.name}
          exactPlaceFrom={result.area_from}
          lengthInMinutes={result.duration.minutes + result.duration.hours * 60}
          placeTo={result.city_to.name}
          exactPlaceTo={result.area_to}
          rideType={RideType.Recurrent}
        />
      ));
      return rides;
    } else if (
      !isLoadingRecurrentRide &&
      recurrentRideData &&
      recurrentRideData.results.length == 0
    ) {
      return (
        <NoRidesWrapper>
          <Typography variant='h3'>You do not have any rides</Typography>
        </NoRidesWrapper>
      );
    } else return <></>;
  };

  const renderPaginationForRecurrentRides = () => {
    if (!(!isLoadingRecurrentRide && recurrentRideData && recurrentRideData.results.length == 0)) {
      const pagesAmount = Math.ceil(
        (recurrentRideData ? recurrentRideData.count : 0) /
          (recurrentRideData ? recurrentRideData.page_size : 1),
      );

      return (
        <PaginationWrapper>
          <Pagination
            count={pagesAmount}
            variant='outlined'
            shape='rounded'
            page={currentPage}
            onChange={handleChange}
            size={isSmallScreen ? 'small' : 'medium'}
          />
        </PaginationWrapper>
      );
    } else return <></>;
  };

  return (
    <>
      <SortAndFiltersComponent>
        <MobileFilter
          filters={
            filterDate && filterDate.isValid()
              ? filters
              : filters.filter((elem) => elem.type !== TypeOfFilter.TimeFilter)
          }
        />
        <Sort
          sortElements={sortElements}
          setSortElementKey={setSortKey}
          sortElementKey={sortKey}
        />
      </SortAndFiltersComponent>
      <Content>
        <DesktopFilter
          filters={
            filterDate && filterDate.isValid()
              ? filters
              : filters.filter((elem) => elem.type !== TypeOfFilter.TimeFilter)
          }
        />
        <Rides>{renderRecurrentRides()}</Rides>
      </Content>
      {renderPaginationForRecurrentRides()}
    </>
  );
};
