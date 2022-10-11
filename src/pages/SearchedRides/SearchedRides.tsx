import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
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
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { Wrapper, Rides, SortAndFiltersComponent, Content } from './SearchedRides.style';

export const SearchedRides = () => {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);
  const [amountOfStars, setAmountOfStars] = useState<number | null>(null);
  const [placeFrom, setPlaceFrom] = useState<AutocompletePlace | null>(null);
  const [placeTo, setPlaceTo] = useState<AutocompletePlace | null>(null);
  const [priceFrom, setPriceFrom] = useState<string>('');
  const [priceTo, setPriceTo] = useState<string>('');
  const initialSortValue = '+date';
  const [sortKey, setSortKey] = useState<string>(initialSortValue);

  const sortElements: SortElement[] = [
    { label: 'Price: highest first', value: '+price' },
    { label: 'Price: lowest first', value: '-price' },
    { label: 'Duration: highest first', value: '+duration' },
    { label: 'Duration: lowest first', value: '-duration' },
    { label: 'Date: highest first', value: '+date' },
    { label: 'Date: lowest first', value: '-date' },
    { label: 'Available seats: highest first', value: '+available_seats' },
    { label: 'Available seats: lowest first', value: '-available_seats' },
  ];

  const filters: FilterType[] = [
    {
      type: TypeOfFilter.DateFilter,
      value: date,
      setValue: setDate,
    } as DateFilterType,
    {
      type: TypeOfFilter.TimeFilter,
      value: time,
      setValue: setTime,
    } as TimeFilterType,
    {
      type: TypeOfFilter.RatingFilter,
      value: amountOfStars,
      setValue: setAmountOfStars,
    } as RatingFilterType,
    {
      type: TypeOfFilter.InputFilter,
      from: placeFrom,
      setFrom: setPlaceFrom,
      to: placeTo,
      setTo: setPlaceTo,
    } as InputFilterType,
    {
      type: TypeOfFilter.PriceFilter,
      from: priceFrom,
      setFrom: setPriceFrom,
      to: priceTo,
      setTo: setPriceTo,
    } as PriceFilterType,
  ];

  return (
    <Wrapper>
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
