import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Dropdown } from './components/Dropdown';
import { FrequenceInput } from './components/FrequenceInput';
import { frequencyTypes } from './utils/FrequenciesLabels';
import { FrequencyType } from '~/enums/FrequencyType';

const FrequenceSelector = () => {
  // do contextu wysłane będzie
  const [frequencyType, setFrequencyType] = useState<string>(FrequencyType.Monthly);
  const [occurrences, setOccurrences] = useState<number>(1);
  const [selectedWeekDays, setSelectedWeekDays] = useState<Array<string>>([]);

  useEffect(() => {
    if (frequencyType !== FrequencyType.Weekly) {
      setSelectedWeekDays([]);
    }
  }, [frequencyType]);

  const onChange = (value: number) => {
    setOccurrences(value);
  };

  const handleWeekDays = (newWeekDays: string[]) => {
    setSelectedWeekDays(newWeekDays);
  };

  return (
    <Grid
      container
      direction={'column'}
    >
      <Grid item>
        <Dropdown
          label='Frequency Type'
          value={frequencyType}
          options={frequencyTypes}
          onChange={(newValue) => {
            setFrequencyType(newValue);
          }}
        />
      </Grid>
      <Grid item>
        <FrequenceInput
          occurrences={occurrences}
          frequencyType={frequencyType}
          onChange={onChange}
          selectedWeekDays={selectedWeekDays}
          handleWeekDays={handleWeekDays}
        />
      </Grid>
    </Grid>
  );
};

export { FrequenceSelector };
