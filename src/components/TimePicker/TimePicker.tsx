import { Theme, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker as MUITimePicker } from '@mui/x-date-pickers/TimePicker';
import { Dayjs } from 'dayjs';
import { useStyles } from './TimePicker.style';

interface Props {
  time: Dayjs | null;
  setTime: (newDate: Dayjs | null) => void;
}

export const TimePicker = ({ time, setTime }: Props) => {
  const theme = useTheme();
  const { timePicker } = useStyles(theme);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleTimeChange = (newTime: Dayjs | null) => {
    setTime(newTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUITimePicker
        className={timePicker}
        value={time}
        onChange={handleTimeChange}
        ampm={false}
        renderInput={(params) => (
          <TextField
            {...params}
            size={isSmallScreen ? 'small' : 'medium'}
            placeholder='Time'
          />
        )}
      />
    </LocalizationProvider>
  );
};
