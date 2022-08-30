import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DropdownOption } from '../../models/DropdownOption';

interface Props {
  options: Array<DropdownOption>;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ options, label, onChange, value }: Props) => {
  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      size='small'
    >
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={(event: SelectChangeEvent) => {
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
      </Select>
    </FormControl>
  );
};

export { Dropdown };
