// Jak zrobic dictionary lookup w ts? Zeby zamiast switch case uzywac

import { FrequencyType, WeekDays } from "~/enums/RecurrenceType";

// w ktrym miejscu w hierarchii powinnam sobie takie coś definiować?
export function getOccurrenceLabel(occurrence: string) {
    switch (occurrence){
        case FrequencyType.Daily:
            return 'day(s)';
        case FrequencyType.Hourly:
            return 'hour(s)';
        case FrequencyType.Weekly:
            return 'week(s)';
        case FrequencyType.Monthly:
            return 'month(s)';
    }
}

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