import MenuItem from '@mui/material/MenuItem';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ChangeEvent, useEffect } from 'react';
import { DropdownBox, StyledTextField, StyledInputLabel } from './Dropdown.style';

interface Props {
  options: Array<{ key: number; value: string }>;
  label: string;
  value: number | null;
  onChange: (value: number | null) => void;
}

const Dropdown = ({ options, label, onChange, value }: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  useEffect(() => {
    if (options.length > 0) {
      onChange(options[0].key);
    }
  }, [onChange, options]);

  return (
    <DropdownBox component='form'>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextField
        id='dropdown-select-ride'
        select
        value={value}
        size={isSmallScreen ? 'small' : 'medium'}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value ? Number(event.target.value) : null);
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
