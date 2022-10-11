import { InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useContext, useEffect } from 'react';
import { getOccurrenceLabel } from '../../utils/occurrenceLabel';
import { WeekDaysButtons } from './components/WeekDaysButtons';
import { StyledInputLabel, StyledTextField } from './FrequenceInput.style';
import RecurrenceContext from '~/components/Recurrence/context/RecurrenceContext';
import { FrequencyType } from '~/enums/FrequencyType';

const FrequenceInput = () => {
  const { recurrence, onFieldChange } = useContext(RecurrenceContext);

  useEffect(() => {
    if (recurrence.frequencyType !== FrequencyType.Weekly) {
      onFieldChange('weekDays', []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recurrence.frequencyType]);

  const onChange = (value: number) => {
    onFieldChange('frequenceOcurrences', value);
  };

  const handleWeekDays = (newWeekDays: string[]) => {
    onFieldChange('weekDays', newWeekDays);
  };

  return (
    <Grid
      container
      item
      spacing={2}
      direction='column'
    >
      <Grid item>
        <StyledInputLabel>Frequence</StyledInputLabel>
        <StyledTextField
          type='number'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                {getOccurrenceLabel(recurrence.frequencyType)}
              </InputAdornment>
            ),
            value: recurrence.frequenceOcurrences,
            onChange: (event) => {
              onChange(Number(event.target.value));
            },
            inputProps: { min: 1, step: 1 },
          }}
        />
      </Grid>
      {recurrence.frequencyType === FrequencyType.Weekly && (
        <Grid item>
          <WeekDaysButtons
            value={recurrence.weekDays}
            onChange={handleWeekDays}
          />
        </Grid>
      )}
    </Grid>
  );
};

export { FrequenceInput };
