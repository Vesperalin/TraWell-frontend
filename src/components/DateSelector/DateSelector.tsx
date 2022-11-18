import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { StyledInputLabel, StyledTextField } from './DateSelector.style';

interface Props {
  id?: string;
  date: Dayjs | null;
  setDate: (date: Dayjs | null) => void;
  label: string;
}

const DateSelector = ({ id, date, setDate, label }: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledInputLabel>{label}</StyledInputLabel>
      <DatePicker
        disablePast
        value={date}
        inputFormat='DD/MM/YYYY'
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => (
          <StyledTextField
            id={id}
            size={isSmallScreen ? 'small' : 'medium'}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export { DateSelector };
