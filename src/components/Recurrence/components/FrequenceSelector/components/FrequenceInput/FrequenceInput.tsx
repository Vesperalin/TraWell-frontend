import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputNumber from 'antd/lib/input-number';
import { FrequencyType } from '~/enums/FrequencyType';
import { getOccurrenceLabel } from '../../utils/FrequenciesLabels';
import { WeekDaysButtons } from './components/WeekDaysButtons';

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
        <InputNumber
          size='large'
          min={1}
          onChange={onChange}
          defaultValue={occurrences}
          addonAfter={<Typography>{getOccurrenceLabel(frequencyType)}</Typography>}
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
