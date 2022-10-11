import { Grid } from '@mui/material';
import { Dayjs } from 'dayjs';
import { useContext } from 'react';
import { DateSelector } from '../../../DateSelector';
import { TimeSelector } from '../../../TimeSelector';
import RecurrenceContext from '../../context/RecurrenceContext';
import { DurationSelector } from './components/DurationSelector';
import { FrequenceSelector } from './components/FrequenceSelector';
import { Duration } from './components/FrequenceSelector/models/Duration';
import { ReccurenceGrid } from './RecurrenceWrapper.style';

const RecurrenceWrapper = () => {
  const { recurrence, onFieldChange } = useContext(RecurrenceContext);

  const handleStartDateChange = (newStartDate: Dayjs | null) => {
    onFieldChange('startDate', newStartDate);
  };

  const handleEndDateChange = (newEndDate: Dayjs | null) => {
    onFieldChange('endDate', newEndDate);
  };

  const handleStartTimeChange = (newStartTime: Dayjs | null) => {
    onFieldChange('startTime', newStartTime);
  };

  const handleDurationChange = (newDuration: Duration) => {
    onFieldChange('duration', newDuration);
  };

  return (
    <ReccurenceGrid
      container
      spacing={6}
      direction='column'
    >
      <Grid
        item
        container
        spacing={2}
      >
        <Grid item>
          <DateSelector
            label='Start Date'
            date={recurrence.startDate}
            setDate={handleStartDateChange}
          />
        </Grid>
        <Grid item>
          <DateSelector
            label='End Date'
            date={recurrence.endDate}
            setDate={handleEndDateChange}
          />
        </Grid>
      </Grid>
      <Grid item>
        <FrequenceSelector />
      </Grid>
      <Grid
        item
        container
        spacing={2}
      >
        <Grid item>
          <TimeSelector
            label='Start time'
            time={recurrence.startTime}
            setTime={handleStartTimeChange}
          />
        </Grid>
        <Grid item>
          <DurationSelector
            duration={recurrence.duration}
            setDuration={handleDurationChange}
          />
        </Grid>
      </Grid>
    </ReccurenceGrid>
  );
};

export { RecurrenceWrapper };
