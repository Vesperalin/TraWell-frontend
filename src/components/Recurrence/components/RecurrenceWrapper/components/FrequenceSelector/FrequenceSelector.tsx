import { Grid } from '@mui/material';
import { useContext, useEffect } from 'react';
import RecurrenceContext from '../../../../context/RecurrenceContext';
import { Dropdown } from './components/Dropdown';
import { FrequenceInput } from './components/FrequenceInput';
import { frequencyTypes } from './utils/frequencyTypes';
import { FrequencyType } from '~/enums/FrequencyType';

const FrequenceSelector = () => {
  const { recurrence, onFieldChange } = useContext(RecurrenceContext);

  useEffect(() => {
    if (recurrence.frequencyType !== FrequencyType.Weekly) {
      onFieldChange('weekDays', []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recurrence.frequencyType]);

  const onChange = (value: number) => {
    onFieldChange('ocurrences', value);
  };

  const handleWeekDays = (newWeekDays: string[]) => {
    onFieldChange('weekDays', newWeekDays);
  };

  const handleFrequencyType = (newFrequencyType: string) => {
    onFieldChange('frequencyType', newFrequencyType);
  };

  return (
    <Grid
      container
      direction='column'
      spacing={2}
    >
      <Grid item>
        <Dropdown
          label='Frequency Type'
          value={recurrence.frequencyType}
          options={frequencyTypes}
          onChange={handleFrequencyType}
        />
      </Grid>
      <Grid item>
        <FrequenceInput
          occurrences={recurrence.frequenceOcurrences}
          frequencyType={recurrence.frequencyType}
          onChange={onChange}
          selectedWeekDays={recurrence.weekDays}
          handleWeekDays={handleWeekDays}
        />
      </Grid>
    </Grid>
  );
};

export { FrequenceSelector };
