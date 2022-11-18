import { RadioGroup as MUIRadioGroup } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { StyledRadio, StyledFormControlLabel } from './RadioGroup.style';

interface Props {
  id?: string;
  options: { value: string; label: string }[];
  defaultValue: string;
  setValue(value: string): void;
}

export const RadioGroup = ({ id, options, defaultValue, setValue }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <MUIRadioGroup
        id={id}
        aria-labelledby='radio-buttons-group-label'
        defaultValue={defaultValue}
        name='radio-buttons-group'
        onChange={handleChange}
        row
      >
        {options.map((option) => {
          return (
            <StyledFormControlLabel
              id={option.value}
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
