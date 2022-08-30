import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { weekDays } from '../../../../utils/weekDays';

interface Props {
  value: Array<string>;
  onChange: (value: string[]) => void;
}

const WeekDaysButtons = ({ value, onChange }: Props) => {
  return (
    <ToggleButtonGroup
      value={value}
      onChange={(_event, newValue) => onChange(newValue)}
      aria-label='week-days-occurrences'
    >
      {weekDays.map((day) => (
        <ToggleButton
          key={day.key}
          value={day.value}
          aria-label={day.value}
        >
          {day.value}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export { WeekDaysButtons };
