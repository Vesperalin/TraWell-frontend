import { weekDays } from '../../../../utils/weekDays';
import { StyledToggleButtonGroup, StyledToggleButton } from './WeekDaysButtons.style';

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
        <StyledToggleButton
          key={day.key}
          value={day.value}
          aria-label={day.value}
        >
          {day.value}
        </StyledToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};

export { WeekDaysButtons };
