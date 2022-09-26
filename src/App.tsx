import dayjs from 'dayjs';
import { useState } from 'react';
import { Recurrence } from './components/Recurrence';
import { FrequencyType } from './enums/FrequencyType';
import { RecurrenceType } from './enums/RecurrenceType';

const App = () => {
  const today = dayjs();
  const defaultRecurrence = {
    startDate: today,
    endDate: today,
    frequencyType: FrequencyType.Weekly,
    startTime: today,
    frequenceOcurrences: 1,
    weekDays: [],
    duration: { hours: 1, minutes: 0 },
  };

  const [recurrence, setRecurrence] = useState<RecurrenceType>(defaultRecurrence);

  const handleRecurrenceChange = (updatedRecurrence: RecurrenceType) => {
    console.log(updatedRecurrence);
    setRecurrence(updatedRecurrence);
  };
  return (
    <Recurrence
      recurrence={recurrence}
      onChange={handleRecurrenceChange}
    />
  );
};

export { App };
