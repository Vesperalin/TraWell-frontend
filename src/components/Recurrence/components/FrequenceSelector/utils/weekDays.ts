import { DropdownOption } from '../models/DropdownOption';
import { WeekDays } from '~/enums/WeekDays';

export const weekDays: DropdownOption[] = [
  {
    key: WeekDays.Monday,
    value: 'Mon',
  },
  {
    key: WeekDays.Tuesday,
    value: 'Tue',
  },
  {
    key: WeekDays.Wednesday,
    value: 'Wed',
  },
  {
    key: WeekDays.Thursday,
    value: 'Thu',
  },
  {
    key: WeekDays.Friday,
    value: 'Fri',
  },
  {
    key: WeekDays.Saturday,
    value: 'Sat',
  },
  {
    key: WeekDays.Sunday,
    value: 'Sun',
  },
];
