import { Grid } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { DateSelector } from './components/DateSelector';
import { DurationSelector } from './components/DurationSelector';
import { FrequenceSelector } from './components/FrequenceSelector';
import { Duration } from './components/FrequenceSelector/models/Duration';
import { TimeSelector } from './components/TimeSelector';
import { useStyles } from './Recurrence.style';

const Recurrence = () => {
  const classes = useStyles();

  // to wszystko + frequence powinno wylądować w Context (jutro ogarnę, bo muszę ściągnąć z projektu w pracy xd)
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [time, setTime] = useState<Dayjs | null>(dayjs());
  const [duration, setDuration] = useState<Duration>({ hours: 0, minutes: 0 });

  return (
    <Grid
      container
      spacing={2}
      direction='column'
      className={classes.reccurence}
    >
      <Grid
        item
        container
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
    </Grid>
  );
};

export { Recurrence };
