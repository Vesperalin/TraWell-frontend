import { Grid } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { DateSelector } from './components/DateSelector';
import { FrequenceSelector } from './components/FrequenceSelector';
import { TimeSelector } from './components/TimeSelector';
import { useStyles } from './Recurrence.style';

const Recurrence = () => {
  const classes = useStyles();

  // to wszystko + frequence powinno wylądować w Context (jutro ogarnę, bo muszę ściągnąć z projektu w pracy xd)
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [time, setTime] = useState<Dayjs | null>(dayjs());

  return (
    <Grid
      container
      spacing={2}
      direction='column'
      className={classes.reccurence}
    >
      <Grid item>
        <DateSelector
          label='Start Date'
          date={startDate}
          setDate={setStartDate}
        />
      </Grid>
      <Grid item>
        <FrequenceSelector />
      </Grid>
      <Grid item>
        <DateSelector
          label='End Date'
          date={endDate}
          setDate={setEndDate}
        />
      </Grid>
      <Grid item>
        <TimeSelector
          label='Start time'
          time={time}
          setTime={setTime}
        />
      </Grid>
      {'tu bedzie jeszcze czas przejazdu, ale nie moge znalezc zadnego fajnego componentu'}
    </Grid>
  );
};

export { Recurrence };
