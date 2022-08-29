import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FrequencyType } from '~/enums/RecurrenceType';
import { Dropdown } from './components/Dropdown/Dropdown';
import { InputNumber } from 'antd';
import { frequencyTypes, getOccurrenceLabel } from './utils/FrequenciesLabels';
import { WeekDaysButtons } from './components/WeekDaysButtons';

const FrequenceSelector = () => {
  // do contextu wysłane będzie
  const [frequencyType, setFrequencyType] = useState<string>(FrequencyType.Monthly);
  const [occurrences, setOccurrences] = useState<number>(1);
  const [selectedWeekDays, setSelectedWeekDays] = useState<Array<string>>(() => []);

  useEffect(() => {
    if (frequencyType !== FrequencyType.Weekly) {
      setSelectedWeekDays([]);
    }
  }, [frequencyType]);

  const onChange = (value: number) => {
    setOccurrences(value);
  };

  const handleWeekDays = (event: React.MouseEvent<HTMLElement>, newWeekDays: string[]) => {
    setSelectedWeekDays(newWeekDays);
  };

  const renderFrequencyComponents = () => (
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
      <Grid
        item
        children={renderFrequencyComponents()}
      ></Grid>
    </Grid>
  );
};

export { FrequenceSelector };
