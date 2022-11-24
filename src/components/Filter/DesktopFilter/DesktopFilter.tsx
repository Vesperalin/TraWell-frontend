import { DateFilter } from '../components/DateFilter';
import { EnumFilter } from '../components/EnumFilter';
import { InputFilter } from '../components/InputFilter';
import { PriceFilter } from '../components/PriceFilter';
import { RatingFilter } from '../components/RatingFilter';
import { RatingMeanFilter } from '../components/RatingMeanFilter';
import { TimeFilter } from '../components/TimeFilter';
import { TypeOfFilter } from '../enums/TypeOfFilter';
import {
  FilterType,
  RadioButtonsFilterType,
  DateFilterType,
  TimeFilterType,
  RatingFilterType,
  InputFilterType,
  RatingMeanFilterType,
  PriceFilterType,
} from '../models/FilterType';
import { StyledBox } from './DesktopFilter.style';

interface Props {
  filters: FilterType[];
}

export const DesktopFilter = ({ filters }: Props) => {
  return (
    <StyledBox id='desktop-wrapper'>
      {filters.map((filter) => {
        if (filter.type === TypeOfFilter.RadioButtonsFilter) {
          return (
            <EnumFilter
              key={filter.type}
              filter={filter as RadioButtonsFilterType}
            />
          );
        } else if (filter.type === TypeOfFilter.DateFilter) {
          return (
            <DateFilter
              key={filter.type}
              filter={filter as DateFilterType}
            />
          );
        } else if (filter.type === TypeOfFilter.TimeFilter) {
          return (
            <TimeFilter
              key={filter.type}
              filter={filter as TimeFilterType}
            />
          );
        } else if (filter.type === TypeOfFilter.RatingFilter) {
          return (
            <RatingFilter
              key={filter.type}
              filter={filter as RatingFilterType}
            />
          );
        } else if (filter.type === TypeOfFilter.InputFilter) {
          return (
            <InputFilter
              key={filter.type}
              filter={filter as InputFilterType}
            />
          );
        } else if (filter.type === TypeOfFilter.PriceFilter) {
          return (
            <PriceFilter
              key={filter.type}
              filter={filter as PriceFilterType}
            />
          );
        } else if (filter.type === TypeOfFilter.RatingMeanFilterType) {
          return (
            <RatingMeanFilter
              key={filter.type}
              filter={filter as RatingMeanFilterType}
            />
          );
        }
      })}
    </StyledBox>
  );
};
