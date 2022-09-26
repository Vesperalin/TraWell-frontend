import MenuItem from '@mui/material/MenuItem';
import { ChangeEvent } from 'react';
import { DropdownOption } from '../../models/DropdownOption';
import { DropdownBox, DropdownInput, StyledInputLabel } from './Dropdown.style';

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
      <DropdownInput
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
      </DropdownInput>
    </DropdownBox>
  );
};

export { Dropdown };
