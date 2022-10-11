import { FrequencyType } from '~/enums/FrequencyType';
import { DropdownOption } from '../models/DropdownOption';

export const frequencyTypes: DropdownOption[] = [
  {
    key: FrequencyType.Hourly,
    value: 'Hourly',
  },
  {
    key: FrequencyType.Daily,
    value: 'Daily',
  },
  {
    key: FrequencyType.Weekly,
    value: 'Weekly',
  },
  {
    key: FrequencyType.Monthly,
    value: 'Monthly',
  },
];
