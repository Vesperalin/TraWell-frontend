import { Dayjs } from 'dayjs';
import { FrequencyType } from '../enums/FrequencyType';
import { Duration } from './Duration';

export interface RecurrenceType {
  startDate: Dayjs;
  endDate: Dayjs;
  startTime: Dayjs;
  frequencyType: FrequencyType;
  weekDays: Array<string>;
  frequenceOccurrences: number;
  duration: Duration;
}
