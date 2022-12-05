import Pagination from '@mui/material/Pagination';
import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';
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
import { useAuth } from '~/hooks/useAuth';
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { transformToFullDate } from '~/utils/TransformToFullDate';
import { Request } from './components/Request';
import {
  Wrapper,
  Rides,
  SortAndFiltersComponent,
  Content,
  NoRidesWrapper,
  PaginationWrapper,
} from './RequestsFromUsers.style';

const sortElements: SortElement[] = [
  { label: 'Date: highest first', value: '-start_date' },
  { label: 'Date: lowest first', value: 'start_date' },
  { label: 'Passenger rate: highest first', value: '-passenger_rate' },
  { label: 'Passenger rate: lowest first', value: 'passenger_rate' },
];

export const RequestsFromUsers = () => {
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

  const { isLoading, data, isError, refetch } = RidesService.usePendingRequests(
    currentPage,
    token,
    sortKey,
    dateAndTime,
    from,
    to,
  );

  useEffect(() => {
    setTimeout(() => {
      refetch();
    }, 100);
    // eslint-disable-next-line max-len
  }, [dateAndTime, from, to, refetch, sortKey, currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(1);
    setTimeout(() => {
      navigate('/pending-requests/1');
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterTime, filterDate, from, to]);

  if (isError) {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          text: 'Unexpected error appeared during retrieving data. Try again',
        }}
      />
    );
  }

  const pagesAmount = Math.ceil((data ? data.count : 0) / (data ? data.page_size : 1));

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
    navigate(`/pending-requests/${value}`);
  };

  return (
    <Wrapper>
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
        <Rides>
          {isLoading && <Loader />}
          {!isLoading &&
            data &&
            data.results.length > 0 &&
            data.results.map((result) => {
              return (
                <Request
                  key={result.id}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  requestId={result.id}
                  rideId={result.ride.ride_id}
                  userId={result.user ? result.user.user_id : -1}
                  startDate={dayjs(result.ride.start_date)}
                  placeFrom={result.ride.city_from.name}
                  exactPlaceFrom={result.ride.area_from}
                  lengthInMinutes={result.ride.duration.minutes + result.ride.duration.hours * 60}
                  placeTo={result.ride.city_to.name}
                  exactPlaceTo={result.ride.area_to}
                  userName={result.user ? result.user.first_name : ''}
                  imageSource={result.user ? result.user.avatar : ''}
                  reviewMean={result.user ? Number(result.user.avg_rate) : 0}
                  refetchData={refetch}
                />
              );
            })}
          {!isLoading && data && data.results.length == 0 && (
            <NoRidesWrapper>
              <Typography variant='h3'>You do not have any requests</Typography>
            </NoRidesWrapper>
          )}
        </Rides>
      </Content>
      {!(!isLoading && data && data.results.length == 0) && (
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
      )}
    </Wrapper>
  );
};
