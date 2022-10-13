import { FrequencyType } from '~/enums/FrequencyType';

const dictionary: { [key: string]: string } = {};
dictionary[FrequencyType.Daily] = 'day(s)';
dictionary[FrequencyType.Hourly] = 'hour(s)';
dictionary[FrequencyType.Weekly] = 'week(s)';
dictionary[FrequencyType.Monthly] = 'month(s)';

export function getOccurrenceLabel(occurrence: string) {
  return dictionary[occurrence];
}
