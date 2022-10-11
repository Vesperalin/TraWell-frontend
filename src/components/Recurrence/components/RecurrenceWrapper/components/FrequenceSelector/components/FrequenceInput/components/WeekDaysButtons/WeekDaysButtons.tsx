import { ToggleButton } from '@mui/material';
import { weekDays } from '../../../../utils/weekDays';
import { StyledToggleButtonGroup } from './WeekDaysButtons.style';

interface Props {
  value: Array<string>;
  onChange: (value: string[]) => void;
}

const WeekDaysButtons = ({ value, onChange }: Props) => {
  return (
    <StyledToggleButtonGroup
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
    </StyledToggleButtonGroup>
  );
};

export { WeekDaysButtons };
