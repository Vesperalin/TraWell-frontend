import Pagination from '@mui/material/Pagination';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';
import { DesktopFilter, MobileFilter } from '~/components/Filter';
import { TypeOfFilter } from '~/components/Filter/enums/TypeOfFilter';
import {
  FilterType,
  DateFilterType,
  TimeFilterType,
  RatingFilterType,
  PriceFilterType,
  RadioButtonsFilterType,
} from '~/components/Filter/models/FilterType';
import { Loader } from '~/components/Loader';
import { NoRideDataFound } from '~/components/NoRideDataFound';
import { RideData } from '~/components/RideData';
import { Sort } from '~/components/Sort';
import { SortElement } from '~/components/Sort/models/SortElement';
import { UserSearchRideInputData } from '~/components/UserSearchRideInputData';
import { Paths } from '~/enums/Paths';
import { transformToFullDate } from '~/utils/TransformToFullDate';
import {
  Wrapper,
  Rides,
  SortAndFiltersComponent,
  Content,
  NoRidesWrapper,
  PaginationWrapper,
} from './SearchedRides.style';

const sortElements: SortElement[] = [
  { label: 'Price: highest first', value: '-price' },
  { label: 'Price: lowest first', value: 'price' },
  { label: 'Duration: highest first', value: '-duration' },
  { label: 'Duration: lowest first', value: 'duration' },
  { label: 'Date: highest first', value: '-start_date' },
  { label: 'Date: lowest first', value: 'start_date' },
  { label: 'Available seats: highest first', value: '-available_seats' },
  { label: 'Available seats: lowest first', value: 'available_seats' },
];

export const SearchedRides = () => {
  const {
    cityFrom,
    countyFrom,
    stateFrom,
    latFrom,
    lonFrom,
    cityTo,
    countyTo,
    stateTo,
    latTo,
    lonTo,
    date,
    seatsAmount,
    page,
  } = useParams();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [filterDate, setFilterDate] = useState<Dayjs | null>(dayjs(date));
  const [filterTime, setFilterTime] = useState<Dayjs | null>(dayjs(date));
  const [filterAmountOfStars, setFilterAmountOfStars] = useState<number | null>(null);
  const [filterPriceFrom, setFilterPriceFrom] = useState<string>('');
  const [filterRideType, setFilterRideType] = useState<string>('all');
  const [filterPriceTo, setFilterPriceTo] = useState<string>('');
  const initialSortValue = 'start_date';
  const [sortKey, setSortKey] = useState<string>(initialSortValue);
  const [currentPage, setCurrentPage] = useState<number>(page ? Number(page) : 1);
  const seats = seatsAmount ? Number(seatsAmount) : 1;
  let dateAndTime: string;
  dayjs.extend(utc);

  if (filterDate && filterTime) {
    dateAndTime = transformToFullDate(filterDate, filterTime);
  } else if (filterDate) {
    dateAndTime = filterDate.utc().format();
  } else if (filterTime) {
    const tempDate = dayjs(date as string);
    dateAndTime = transformToFullDate(tempDate, filterTime);
  } else {
    dateAndTime = date as string;
  }

  const { isLoading, data, isError } = RidesService.useRides(
    currentPage,
    filterRideType,
    filterAmountOfStars !== null ? filterAmountOfStars : undefined,
    filterPriceFrom === '' ? undefined : Number(filterPriceFrom),
    filterPriceTo === '' ? undefined : Number(filterPriceTo),
    sortKey,
    cityFrom as string,
    stateFrom as string,
    countyFrom as string,
    latFrom as string,
    lonFrom as string,
    cityTo as string,
    stateTo as string,
    countyTo as string,
    latTo as string,
    lonTo as string,
    seats,
    dateAndTime,
  );

  if (isError) {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          // eslint-disable-next-line max-len
          text: 'Error appeared during retrieving data. Check if you gave correct data and try again',
        }}
      />
    );
  }

  const pagesAmount = Math.ceil((data ? data.count : 0) / (data ? data.page_size : 1));

  const filters: FilterType[] = [
    {
      label: 'Driver type',
      type: TypeOfFilter.RadioButtonsFilter,
      options: [
        { value: 'all', label: 'All' },
        { value: 'private', label: 'Private' },
        { value: 'company', label: 'Company' },
      ],
      defaultValue: 'all',
      setValue: setFilterRideType,
    } as RadioButtonsFilterType,
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
      type: TypeOfFilter.RatingFilter,
      value: filterAmountOfStars,
      setValue: setFilterAmountOfStars,
    } as RatingFilterType,
    {
      type: TypeOfFilter.PriceFilter,
      from: filterPriceFrom,
      setFrom: setFilterPriceFrom,
      to: filterPriceTo,
      setTo: setFilterPriceTo,
    } as PriceFilterType,
  ];

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(value);

    navigate(
      // eslint-disable-next-line max-len
      `/searched-rides/${cityFrom as string}/${countyFrom as string}/${stateFrom as string}/${
        latFrom as string
      }/${lonFrom as string}/${cityTo as string}/${countyTo as string}/${stateTo as string}/${
        latTo as string
      }/${lonTo as string}/${dateAndTime}/${seats}/${value}`,
    );
  };

  return (
    <Wrapper>
      <UserSearchRideInputData
        placeFrom={cityFrom ? cityFrom : ''}
        exactPlaceFrom={`${countyFrom}, ${stateFrom}`}
        placeTo={cityTo ? cityTo : ''}
        exactPlaceTo={`${countyTo}, ${stateTo}`}
        date={dayjs(dateAndTime)}
        seats={seatsAmount ? seatsAmount : ''}
      />
      <SortAndFiltersComponent>
        <MobileFilter filters={filters} />
        <Sort
          sortElements={sortElements}
          setSortElementKey={setSortKey}
          sortElementKey={sortKey}
        />
      </SortAndFiltersComponent>
      <Content>
        <DesktopFilter filters={filters} />
        <Rides>
          {isLoading && <Loader />}
          {!isLoading &&
            data &&
            data.results.length > 0 &&
            data.results.map((result) => (
              <RideData
                rideId={result.ride_id}
                key={result.ride_id}
                startDate={dayjs(result.start_date)}
                placeFrom={result.city_from.name}
                exactPlaceFrom={result.area_from}
                lengthInMinutes={result.duration.minutes + result.duration.hours * 60}
                placeTo={result.city_to.name}
                exactPlaceTo={result.area_to}
                seats={result.seats}
                takenSeats={result.available_seats}
                cost={Number(result.price)}
                name={result.driver.first_name}
                imageSource={result.driver.avatar}
                reviewMean={Number(result.driver.avg_rate)}
              />
            ))}
          {!isLoading && data && data.results.length == 0 && (
            <NoRidesWrapper>
              <NoRideDataFound
                placeFrom={cityFrom ? cityFrom : ''}
                placeTo={cityTo ? cityTo : ''}
              />
            </NoRidesWrapper>
          )}
        </Rides>
      </Content>
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
    </Wrapper>
  );
};
