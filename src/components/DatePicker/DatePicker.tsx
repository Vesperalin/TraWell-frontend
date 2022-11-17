import { Theme, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Dayjs } from 'dayjs';
import { useStyles } from './DatePicker.style';

interface Props {
  date: Dayjs | null;
  setDate: (newDate: Dayjs | null) => void;
}

export const DatePicker = ({ date, setDate }: Props) => {
  const theme = useTheme();
  const { datePicker } = useStyles(theme);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleDateChange = (newDate: Dayjs | null) => {
    setDate(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {isSmallScreen ? (
        <MobileDatePicker
          className={datePicker}
          disablePast
          inputFormat='DD/MM/YYYY'
          value={date}
          onChange={handleDateChange}
          renderInput={(params) => (
            <TextField
              id='mobile-date-picker-textfield'
              {...params}
              size='small'
              variant='outlined'
              placeholder='Date'
            />
          )}
        />
      ) : (
        <DesktopDatePicker
          inputFormat='DD/MM/YYYY'
          className={datePicker}
          disablePast
          value={date}
          onChange={handleDateChange}
          renderInput={(params) => (
            <TextField
              id='desktop-date-picker-textfield'
              {...params}
              variant='outlined'
              placeholder='Date'
            />
          )}
        />
      )}
    </LocalizationProvider>
  );
};
