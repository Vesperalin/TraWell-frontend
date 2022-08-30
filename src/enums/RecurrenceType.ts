import { Dayjs } from 'dayjs';
import { FrequencyType } from './FrequencyType';

export interface RecurrenceType {
    startDate: Dayjs;
    endDate: Dayjs;
    startTime: Dayjs;
    frequencyType: FrequencyType;
}
