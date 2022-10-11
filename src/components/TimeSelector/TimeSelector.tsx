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
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledInputLabel>{label}</StyledInputLabel>
      <TimePicker
        value={time}
        onChange={(newValue) => {
          setTime(newValue);
        }}
        renderInput={(params) => <StyledTextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export { TimeSelector };
