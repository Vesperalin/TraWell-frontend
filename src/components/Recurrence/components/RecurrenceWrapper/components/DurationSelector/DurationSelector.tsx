import { Grid, InputAdornment } from '@mui/material';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ChangeEvent } from 'react';
import { Duration } from '../FrequenceSelector/models/Duration';
import { StyledInputLabel, StyledTextField } from './DurationSelector.style';

interface Props {
  duration: Duration;
  setDuration: (duration: Duration) => void;
}

const DurationSelector = ({ duration, setDuration }: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

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
      <StyledInputLabel>Duration</StyledInputLabel>
      <Grid
        container
        spacing={2}
      >
        <Grid item>
          <StyledTextField
            id='duration-hours-selector'
            type='number'
            size={isSmallScreen ? 'small' : 'medium'}
            InputProps={{
              endAdornment: <InputAdornment position='end'>h</InputAdornment>,
              value: duration.hours,
              onChange: (event: ChangeEvent<HTMLInputElement>) => handleChangeHours(event),
              inputProps: { min: 0, step: 1 },
            }}
          />
        </Grid>
        <Grid item>
          <StyledTextField
            id='duration-minutes-selector'
            type='number'
            size={isSmallScreen ? 'small' : 'medium'}
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
