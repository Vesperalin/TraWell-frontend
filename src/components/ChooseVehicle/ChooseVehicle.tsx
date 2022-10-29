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
        value={value ? value.toString() : ''}
        label={value === null ? 'Vehicle' : ''}
        onChange={handleChange}
        size={isSmallScreen ? 'small' : 'medium'}
      >
        <MenuItem value={-1}>None</MenuItem>
        <MenuItem value={1}>Opel, Astra, Czarny</MenuItem>
        <MenuItem value={20}>Wolksvagen, Polo, biały</MenuItem>
        <MenuItem value={30}>Fiat, 500, Kremowy</MenuItem>
      </Select>
    </StyledFormControl>
  );
};
