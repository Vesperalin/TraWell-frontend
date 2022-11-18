import { Grid } from '@mui/material';
import { useContext } from 'react';
import { RecurrenceContext } from '~/context/RecurrenceContext';
import { Dropdown } from '../../../../../Dropdown';
import { FrequenceInput } from './components/FrequenceInput';
import { frequencyTypes } from './utils/frequencyTypes';

const FrequenceSelector = () => {
  const { recurrence, onFieldChange } = useContext(RecurrenceContext);

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
          id='frequence-type-selector'
          label='Frequency Type'
          value={recurrence.frequencyType}
          options={frequencyTypes}
          onChange={handleFrequencyType}
        />
      </Grid>
      <Grid item>
        <FrequenceInput />
      </Grid>
    </Grid>
  );
};

export { FrequenceSelector };
