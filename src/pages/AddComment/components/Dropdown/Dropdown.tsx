import MenuItem from '@mui/material/MenuItem';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ChangeEvent } from 'react';
import { DropdownBox, StyledTextField, StyledInputLabel } from './Dropdown.style';

interface Props {
  options: Array<{ key: number; value: string }>;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ options, label, onChange, value }: Props) => {
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
