import { Dayjs } from 'dayjs';
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { TypeOfFilter } from '../enums/TypeOfFilter';

export interface FilterType {
  type: TypeOfFilter;
}

export interface RadioButtonsFilterType extends FilterType {
  label: string;
  options: { value: string; label: string }[];
  defaultValue: string;
  setValue(value: string): void;
}

export interface DateFilterType extends FilterType {
  value: Dayjs | null;
  setValue(value: Dayjs | null): void;
}

export interface TimeFilterType extends FilterType {
  value: Dayjs | null;
  setValue(value: Dayjs | null): void;
}

export interface RatingFilterType extends FilterType {
  value: number | null;
  setValue(value: number | null): void;
}

export interface InputFilterType extends FilterType {
  from: AutocompletePlace | null;
  setFrom(value: AutocompletePlace | null): void;
  to: AutocompletePlace | null;
  setTo(value: AutocompletePlace | null): void;
}

export interface PriceFilterType extends FilterType {
  from: string;
  setFrom(value: string): void;
  to: string;
  setTo(value: string): void;
}
