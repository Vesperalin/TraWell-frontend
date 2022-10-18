import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DesktopFilter, MobileFilter } from '~/components/Filter';
import { TypeOfFilter } from '~/components/Filter/enums/TypeOfFilter';
import {
  FilterType,
  DateFilterType,
  TimeFilterType,
  RatingFilterType,
  InputFilterType,
  PriceFilterType,
} from '~/components/Filter/models/FilterType';
import { RideData } from '~/components/RideData';
import { Sort } from '~/components/Sort';
import { SortElement } from '~/components/Sort/models/SortElement';
import { UserSearchRideInputData } from '~/components/UserSearchRideInputData';
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { Wrapper, Rides, SortAndFiltersComponent, Content } from './SearchedRides.style';

const sortElements: SortElement[] = [
  { label: 'Price: highest first', value: 'price' },
  { label: 'Price: lowest first', value: '-price' },
  { label: 'Duration: highest first', value: 'duration' },
  { label: 'Duration: lowest first', value: '-duration' },
  { label: 'Date: highest first', value: 'start_date' },
  { label: 'Date: lowest first', value: '-start_date' },
  { label: 'Available seats: highest first', value: 'available_seats' },
  { label: 'Available seats: lowest first', value: '-available_seats' },
];

export const SearchedRides = () => {
  const { cityFrom, countyFrom, stateFrom, cityTo, countyTo, stateTo, date, time, seatsAmount } =
    useParams();

  const [filterDate, setFilterDate] = useState<Dayjs | null>(null);
  const [filterTime, setFilterTime] = useState<Dayjs | null>(null);
  const [filterAmountOfStars, setFilterAmountOfStars] = useState<number | null>(null);
  const [filterPlaceFrom, setFilterPlaceFrom] = useState<AutocompletePlace | null>(null);
  const [filterPlaceTo, setFilterPlaceTo] = useState<AutocompletePlace | null>(null);
  const [filterPriceFrom, setFilterPriceFrom] = useState<string>('');
  const [filterPriceTo, setFilterPriceTo] = useState<string>('');

  const initialSortValue = 'start_date';
  const [sortKey, setSortKey] = useState<string>(initialSortValue);

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
      type: TypeOfFilter.RatingFilter,
      value: filterAmountOfStars,
      setValue: setFilterAmountOfStars,
    } as RatingFilterType,
    {
      type: TypeOfFilter.InputFilter,
      from: filterPlaceFrom,
      setFrom: setFilterPlaceFrom,
      to: filterPlaceTo,
      setTo: setFilterPlaceTo,
    } as InputFilterType,
    {
      type: TypeOfFilter.PriceFilter,
      from: filterPriceFrom,
      setFrom: setFilterPriceFrom,
      to: filterPriceTo,
      setTo: setFilterPriceTo,
    } as PriceFilterType,
  ];

  return (
    <Wrapper>
      <UserSearchRideInputData
        placeFrom={cityFrom ? cityFrom : ''}
        exactPlaceFrom={`${countyFrom}, ${stateFrom}`}
        placeTo={cityTo ? cityTo : ''}
        exactPlaceTo={`${countyTo}, ${stateTo}`}
        date={date ? dayjs(date) : dayjs()}
        time={time ? dayjs(time) : dayjs()}
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
          <RideData
            startDate={dayjs()}
            placeFrom='Leszno'
            exactPlaceFrom='skateplaza Zatorze'
            lengthInMinutes={90}
            placeTo='Wrocław'
            exactPlaceTo='Nasyp'
            seats={4}
            takenSeats={2}
            cost={22}
            name='Antoni'
            imageSource='a'
            reviewMean={4.5}
          />
          <RideData
            startDate={dayjs()}
            placeFrom='Leszno'
            exactPlaceFrom='skateplaza Zatorze'
            lengthInMinutes={90}
            placeTo='Wrocław'
            exactPlaceTo='Nasyp'
            seats={4}
            takenSeats={2}
            cost={22}
            name='Marek'
            imageSource='a'
            reviewMean={4.5}
          />
          <RideData
            startDate={dayjs()}
            placeFrom='Leszno'
            exactPlaceFrom='skateplaza Zatorze'
            lengthInMinutes={90}
            placeTo='Wrocław'
            exactPlaceTo='Nasyp'
            seats={4}
            takenSeats={2}
            cost={22}
            name='Katarzyna'
            imageSource='a'
            reviewMean={4.5}
          />
          <RideData
            startDate={dayjs()}
            placeFrom='Leszno'
            exactPlaceFrom='skateplaza Zatorze'
            lengthInMinutes={90}
            placeTo='Wrocław'
            exactPlaceTo='Nasyp'
            seats={4}
            takenSeats={2}
            cost={22}
            name='Andrzej'
            imageSource='a'
            reviewMean={4.5}
          />
          <RideData
            startDate={dayjs()}
            placeFrom='Leszno'
            exactPlaceFrom='skateplaza Zatorze'
            lengthInMinutes={90}
            placeTo='Wrocław'
            exactPlaceTo='Nasyp'
            seats={4}
            takenSeats={2}
            cost={22}
            name='John'
            imageSource='a'
            reviewMean={4.5}
          />
        </Rides>
      </Content>
    </Wrapper>
  );
};
