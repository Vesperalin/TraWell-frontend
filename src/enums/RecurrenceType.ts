import { Dayjs } from "dayjs";

export enum FrequencyType {
    Hourly = 'hourly',
    Daily = 'daily',
    Weekly = 'weekly',
    Monthly = 'monthly',
}

export enum WeekDays {
    Monday = 'monday',
    Tuesday = 'tuesday',
    Wednesday = 'wednesday',
    Thursday = 'thursday',
    Friday = 'friday',
    Saturday = 'saturday',
    Sunday = 'sunday',
}

export interface RecurrenceType {
    startDate: Dayjs;
    endDate: Dayjs;
    startTime: Dayjs;
    frequencyType: FrequencyType;
}