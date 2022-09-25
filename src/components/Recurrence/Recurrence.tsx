import { Grid } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { DateSelector } from './components/DateSelector';
import { DurationSelector } from './components/DurationSelector';
import { FrequenceSelector } from './components/FrequenceSelector';
import { Duration } from './components/FrequenceSelector/models/Duration';
import { TimeSelector } from './components/TimeSelector';
import { ReccurenceGrid } from './Recurrence.style';

const Recurrence = () => {
  // to wszystko + frequence powinno wylądować w Context (jutro ogarnę, bo muszę ściągnąć z projektu w pracy xd)
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [time, setTime] = useState<Dayjs | null>(dayjs());
  const [duration, setDuration] = useState<Duration>({ hours: 0, minutes: 0 });

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
            date={startDate}
            setDate={setStartDate}
          />
        </Grid>
        <Grid item>
          <DateSelector
            label='End Date'
            date={endDate}
            setDate={setEndDate}
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
            time={time}
            setTime={setTime}
          />
        </Grid>
        <Grid item>
          <DurationSelector
            duration={duration}
            setDuration={setDuration}
          />
        </Grid>
      </Grid>
    </ReccurenceGrid>
  );
};

export { Recurrence };
