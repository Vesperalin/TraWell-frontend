import { Dayjs } from 'dayjs';
import { Duration } from './Duration';
import { FrequencyType } from './FrequencyType';

export interface RecurrenceType {
    startDate: Dayjs;
    endDate: Dayjs;
    startTime: Dayjs;
    frequencyType: FrequencyType;
    weekDays: Array<string>;
    frequenceOcurrences: number;
    duration: Duration
}
