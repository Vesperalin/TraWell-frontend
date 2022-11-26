import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker as MUITimePicker } from '@mui/x-date-pickers/TimePicker';
import { Dayjs } from 'dayjs';
import { TimeFilterType } from '../../models/FilterType';
import { useStyles } from './TimeFilter.style';

interface Props {
  filter: TimeFilterType;
}

export const TimeFilter = ({ filter }: Props) => {
  const { value, setValue } = filter;
  const theme = useTheme();
  const { timePicker } = useStyles(theme);

  const handleTimeChange = (newTime: Dayjs | null) => {
    if (newTime?.isValid() || newTime == null) {
      setValue(newTime);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUITimePicker
        label='Start Time'
        className={timePicker}
        value={value}
        ampm={false}
        onChange={handleTimeChange}
        renderInput={(params) => (
          <TextField
            {...params}
            size='small'
            placeholder='Start Time'
          />
        )}
      />
    </LocalizationProvider>
  );
};
