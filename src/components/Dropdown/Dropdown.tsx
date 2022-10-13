import MenuItem from '@mui/material/MenuItem';
import { ChangeEvent } from 'react';
// eslint-disable-next-line max-len
import { DropdownOption } from '../Recurrence/components/RecurrenceWrapper/components/FrequenceSelector/models/DropdownOption';
import { DropdownBox, StyledTextField, StyledInputLabel } from './Dropdown.style';

interface Props {
  options: Array<DropdownOption>;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ options, label, onChange, value }: Props) => {
  return (
    <DropdownBox component='form'>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextField
        select
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.key}
            value={option.key}
          >
            {option.value}
          </MenuItem>
        ))}
      </StyledTextField>
    </DropdownBox>
  );
};

export { Dropdown };
