import { RadioGroup as MUIRadioGroup } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { StyledFormLabel, StyledRadio, StyledFormControlLabel } from './RadioGroup.style';

interface Props {
  label: string;
  options: { value: string; label: string }[];
  defaultValue: string;
  setValue(value: string): void;
}

export const RadioGroup = ({ label, options, defaultValue, setValue }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <StyledFormLabel>{label}</StyledFormLabel>
      <MUIRadioGroup
        aria-labelledby='radio-buttons-group-label'
        defaultValue={defaultValue}
        name='radio-buttons-group'
        onChange={handleChange}
        row
      >
        {options.map((option) => {
          return (
            <StyledFormControlLabel
              key={option.label}
              value={option.value}
              control={<StyledRadio size='small' />}
              label={option.label}
            />
          );
        })}
      </MUIRadioGroup>
    </FormControl>
  );
};
