import { InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid';
import { getOccurrenceLabel } from '../../utils/occurrenceLabel';
import { WeekDaysButtons } from './components/WeekDaysButtons';
import { StyledInputLabel, StyledTextField } from './FrequenceInput.style';
import { FrequencyType } from '~/enums/FrequencyType';

interface Props {
  occurrences: number;
  onChange: (value: number) => void;
  frequencyType: string;
  selectedWeekDays: Array<string>;
  handleWeekDays: (weekDays: Array<string>) => void;
}

const FrequenceInput = ({
  occurrences,
  onChange,
  frequencyType,
  selectedWeekDays,
  handleWeekDays,
}: Props) => {
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
              <InputAdornment position='end'>{getOccurrenceLabel(frequencyType)}</InputAdornment>
            ),
            value: occurrences,
            onChange: (event) => {
              onChange(Number(event.target.value));
            },
            inputProps: { min: 1, step: 1 },
          }}
        />
      </Grid>
      {frequencyType === FrequencyType.Weekly && (
        <Grid item>
          <WeekDaysButtons
            value={selectedWeekDays}
            onChange={handleWeekDays}
          />
        </Grid>
      )}
    </Grid>
  );
};

export { FrequenceInput };
