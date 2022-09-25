import { Grid, InputAdornment, InputLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';
import { Duration } from '../FrequenceSelector/models/Duration';

interface Props {
  duration: Duration;
  setDuration: (duration: Duration) => void;
}

const DurationSelector = ({ duration, setDuration }: Props) => {
  const handleChangeHours = (event: ChangeEvent<HTMLInputElement>) => {
    const newDuration = { hours: Number(event.target.value), minutes: duration.minutes };
    setDuration(newDuration);
  };

  const handleChangeMinutes = (event: ChangeEvent<HTMLInputElement>) => {
    const newDuration = { hours: duration.hours, minutes: Number(event.target.value) };
    setDuration(newDuration);
  };

  return (
    <>
      <InputLabel sx={{ color: 'white' }}>Duration</InputLabel>
      <Grid
        container
        spacing={2}
      >
        <Grid item>
          <TextField
            type='number'
            sx={{
              '& legend': { display: 'none' },
              '& fieldset': { top: 0 },
            }}
            InputProps={{
              endAdornment: <InputAdornment position='end'>h</InputAdornment>,
              value: duration.hours,
              onChange: (event: ChangeEvent<HTMLInputElement>) => handleChangeHours(event),
              inputProps: { min: 0, step: 1 },
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            type='number'
            sx={{
              '& legend': { display: 'none' },
              '& fieldset': { top: 0 },
            }}
            InputProps={{
              endAdornment: <InputAdornment position='end'>min</InputAdornment>,
              value: duration.minutes,
              onChange: (event: ChangeEvent<HTMLInputElement>) => handleChangeMinutes(event),
              inputProps: { min: 0, max: 59, step: 1 },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export { DurationSelector };
