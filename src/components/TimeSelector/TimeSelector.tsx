import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { StyledInputLabel, StyledTextField } from './TimeSelector.style';

interface Props {
  time: Dayjs | null;
  setTime: (date: Dayjs | null) => void;
  label: string;
}

const TimeSelector = ({ time, setTime, label }: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledInputLabel>{label}</StyledInputLabel>
      <TimePicker
        value={time}
        ampm={false}
        onChange={(newValue) => {
          setTime(newValue);
        }}
        renderInput={(params) => (
          <StyledTextField
            size={isSmallScreen ? 'small' : 'medium'}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export { TimeSelector };
