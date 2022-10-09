import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { RadioButtonFilterType } from '../../models/FilterType';
import { StyledFormLabel, StyledRadio } from './EnumFilter.style';

interface Props {
  filter: RadioButtonFilterType;
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
            <FormControlLabel
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
