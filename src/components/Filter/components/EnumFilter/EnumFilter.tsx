import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import { RadioButtonsFilterType } from '../../models/FilterType';
import { StyledFormLabel, StyledRadio, StyledFormControlLabel } from './EnumFilter.style';

interface Props {
  filter: RadioButtonsFilterType;
}

export const EnumFilter = ({ filter }: Props) => {
  const { label, options, defaultValue, setValue } = filter;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <StyledFormLabel>{label}</StyledFormLabel>
      <RadioGroup
        aria-labelledby='radio-buttons-group-label'
        defaultValue={defaultValue}
        name='radio-buttons-group'
        onChange={handleChange}
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
      </RadioGroup>
    </FormControl>
  );
};
