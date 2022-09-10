import { InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { getOccurrenceLabel } from '../../utils/occurrenceLabel';
import { WeekDaysButtons } from './components/WeekDaysButtons';
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
    <>
      <Grid item>
        <TextField
          type='number'
          sx={{
            '& legend': { display: 'none' },
            '& fieldset': { top: 0 },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>{getOccurrenceLabel(frequencyType)}</InputAdornment>
            ),
            value: occurrences,
            onChange: (event) => {
              onChange(Number(event.target.value));
            },
            inputProps: { min: 0, step: 1 },
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
    </>
  );
};

export { FrequenceInput };
