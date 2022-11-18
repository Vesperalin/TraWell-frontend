import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { StyledFormControl } from './ChooseVehicle.style';

interface Props {
  value: number | null;
  setValue: (value: number | null) => void;
}

export const ChooseVehicle = ({ value, setValue }: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  // TODO: add request to DB and add async handling
  // ------ (display textfield instead of MenuItems when loading or sth)
  // TODO set first vehicle as default if exist

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value != '-1') {
      setValue(Number(event.target.value));
    } else {
      setValue(null);
    }
  };

  return (
    <StyledFormControl size={isSmallScreen ? 'small' : 'medium'}>
      {value === null && <InputLabel>Vehicle</InputLabel>}
      <Select
        id='choose-vehicle-dropdown'
        value={value ? value.toString() : ''}
        label={value === null ? 'Vehicle' : ''}
        onChange={handleChange}
        size={isSmallScreen ? 'small' : 'medium'}
      >
        <MenuItem value={1}>Opel, Astra, Czarny 1</MenuItem>
        <MenuItem value={2}>Opel, Astra, Czarny 2</MenuItem>
        <MenuItem value={3}>Opel, Astra, Czarny 3</MenuItem>
        <MenuItem value={4}>Opel, Astra, Czarny 4</MenuItem>
        <MenuItem value={5}>Opel, Astra, Czarny 5</MenuItem>
        <MenuItem value={6}>Opel, Astra, Czarny 6</MenuItem>
        <MenuItem value={7}>Opel, Astra, Czarny 7</MenuItem>
        <MenuItem value={8}>Opel, Astra, Czarny 8</MenuItem>
        <MenuItem value={9}>Opel, Astra, Czarny 9</MenuItem>
        <MenuItem value={10}>Opel, Astra, Czarny 10</MenuItem>
        <MenuItem value={11}>Opel, Astra, Czarny 11</MenuItem>
        <MenuItem value={12}>Opel, Astra, Czarny 12</MenuItem>
        <MenuItem value={13}>Opel, Astra, Czarny 13</MenuItem>
        <MenuItem value={14}>Opel, Astra, Czarny 14</MenuItem>
        <MenuItem value={15}>Opel, Astra, Czarny 15</MenuItem>
        <MenuItem value={16}>Opel, Astra, Czarny 16</MenuItem>
        <MenuItem value={17}>Opel, Astra, Czarny 17</MenuItem>
        <MenuItem value={18}>Opel, Astra, Czarny 18</MenuItem>
        <MenuItem value={19}>Opel, Astra, Czarny 19</MenuItem>
        <MenuItem value={20}>Opel, Astra, Czarny 20</MenuItem>
      </Select>
    </StyledFormControl>
  );
};
