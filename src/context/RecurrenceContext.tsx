/* eslint-disable @typescript-eslint/no-empty-function */
import dayjs from 'dayjs';
import React from 'react';
import { FrequencyType } from '~/enums/FrequencyType';
import { RecurrenceType } from '~/models/RecurrenceType';

interface RecurrenceContextType {
  recurrence: RecurrenceType;
  onFieldChange: (key: string, value: unknown) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFieldsChange: (object: any) => void;
}

const now = dayjs();
const contextInitValue: RecurrenceContextType = {
  recurrence: {
    startDate: now,
    endDate: now,
    startTime: now,
    frequencyType: FrequencyType.Daily,
    frequenceOccurrences: 1,
    weekDays: [],
    duration: { hours: 1, minutes: 0 },
  },
  onFieldChange: () => {},
  onFieldsChange: () => {},
};

const RecurrenceContext = React.createContext<RecurrenceContextType>(contextInitValue);

export { RecurrenceContext };
