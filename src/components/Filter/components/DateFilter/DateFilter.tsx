import { Theme, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Dayjs } from 'dayjs';
import { DateFilterType } from '../../models/FilterType';
import { useStyles } from './DateFilter.style';

interface Props {
  filter: DateFilterType;
}

export const DateFilter = ({ filter }: Props) => {
  const { value, setValue } = filter;
  const theme = useTheme();
  const { dateFilter } = useStyles(theme);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleDateChange = (newDate: Dayjs | null) => {
    if (newDate?.isValid() || newDate == null) {
      setValue(newDate);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {isSmallScreen ? (
        <MobileDatePicker
          label='Start Date'
          className={dateFilter}
          inputFormat='DD/MM/YYYY'
          value={value}
          onChange={handleDateChange}
          renderInput={(params) => (
            <TextField
              {...params}
              size='small'
              variant='outlined'
              placeholder='Start Date'
            />
          )}
        />
      ) : (
        <DesktopDatePicker
          label='Start Date'
          inputFormat='DD/MM/YYYY'
          className={dateFilter}
          value={value}
          onChange={handleDateChange}
          renderInput={(params) => (
            <TextField
              {...params}
              size='small'
              variant='outlined'
              placeholder='Start Date'
            />
          )}
        />
      )}
    </LocalizationProvider>
  );
};
