import MenuItem from '@mui/material/MenuItem';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ChangeEvent } from 'react';
// eslint-disable-next-line max-len
import { DropdownOption } from '../Recurrence/components/RecurrenceWrapper/components/FrequenceSelector/models/DropdownOption';
import { DropdownBox, StyledTextField, StyledInputLabel } from './Dropdown.style';

interface Props {
  id?: string;
  options: Array<DropdownOption>;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ id, options, label, onChange, value }: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <DropdownBox component='form'>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextField
        select
        value={value}
        size={isSmallScreen ? 'small' : 'medium'}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
      >
        {options.map((option) => (
          <MenuItem
            id={id}
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
