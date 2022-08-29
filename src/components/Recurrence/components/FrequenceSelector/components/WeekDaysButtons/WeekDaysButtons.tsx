import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { weekDays } from '../../utils/FrequenciesLabels';

interface WeekDaysButtonsProps {
  value: Array<string>;
  onChange: (event: React.MouseEvent<HTMLElement>, value: string[]) => void;
}

const WeekDaysButtons = ({ value, onChange }: WeekDaysButtonsProps) => {
  return (
    <ToggleButtonGroup
      value={value}
      onChange={onChange}
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
