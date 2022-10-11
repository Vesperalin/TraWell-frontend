import dayjs from 'dayjs';
import { useState } from 'react';
import { Recurrence } from '~/components/Recurrence';
import { FrequencyType } from '~/enums/FrequencyType';
import { RecurrenceType } from '~/models/RecurrenceType';
import { Carousel } from './components/Carousel';

export const Home = () => {
  const today = dayjs();
  const defaultRecurrence = {
    startDate: today,
    endDate: today,
    frequencyType: FrequencyType.Weekly,
    startTime: today,
    frequenceOccurrences: 1,
    weekDays: [],
    duration: { hours: 1, minutes: 0 },
  };

  const [recurrence, setRecurrence] = useState<RecurrenceType>(defaultRecurrence);

  const handleRecurrenceChange = (updatedRecurrence: RecurrenceType) => {
    console.log(updatedRecurrence);
    setRecurrence(updatedRecurrence);
  };

  return (
    <>
      <Recurrence
        recurrence={recurrence}
        onChange={handleRecurrenceChange}
      />
      <Carousel />
    </>
  );
};
// import { SearchRideForm } from './components/SearchRideForm';
// import { Wrapper } from './Home.style';

// export const Home = () => {
//   return (
//     <Wrapper>
//       <SearchRideForm />
//       <Carousel />
//     </Wrapper>
//   );
// };
