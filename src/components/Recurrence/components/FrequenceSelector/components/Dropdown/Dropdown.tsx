import { InputLabel, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { ChangeEvent } from 'react';
import { DropdownOption } from '../../models/DropdownOption';

interface Props {
  options: Array<DropdownOption>;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ options, label, onChange, value }: Props) => {
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <InputLabel>{label}</InputLabel>
      <TextField
        select
        sx={{
          '& legend': { display: 'none' },
          '& fieldset': { top: 0 },
        }}
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
      </TextField>
    </Box>
  );
};

export { Dropdown };
