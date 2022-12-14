import { Grid } from '@mui/material';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Dayjs } from 'dayjs';
import { useContext } from 'react';
import { RecurrenceContext } from '~/context/RecurrenceContext';
import { DateSelector } from '../../../DateSelector';
import { TimeSelector } from '../../../TimeSelector';
import { DurationSelector } from './components/DurationSelector';
import { FrequenceSelector } from './components/FrequenceSelector';
import { Duration } from './components/FrequenceSelector/models/Duration';
import { ReccurenceGrid } from './RecurrenceWrapper.style';

const RecurrenceWrapper = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
      rowSpacing={3}
      direction='column'
    >
      <Grid
        item
        container
        spacing={isSmallScreen ? 2 : 10}
      >
        <Grid item>
          <DateSelector
            id='start-date-selector'
            label='Start Date'
            date={recurrence.startDate}
            setDate={handleStartDateChange}
          />
        </Grid>
        <Grid item>
          <DateSelector
            id='end-date-selector'
            label='End Date'
            date={recurrence.endDate}
            setDate={handleEndDateChange}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        spacing={isSmallScreen ? 2 : 10}
      >
        <Grid item>
          <TimeSelector
            id='start-time-selector'
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
      <Grid item>
        <FrequenceSelector />
      </Grid>
    </ReccurenceGrid>
  );
};

export { RecurrenceWrapper };
