import { Dayjs } from 'dayjs';
import { AutocompletePlace } from '~/models/AutocompletePlace';

export interface SearchRideData {
  placeFrom: AutocompletePlace;
  placeTo: AutocompletePlace;
  amountOfPeople: number | null;
  date: Dayjs | null;
  time: Dayjs | null;
}
