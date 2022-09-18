import { InputLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

interface Props {
  time: Dayjs | null;
  setTime: (date: Dayjs | null) => void;
  label: string;
}

const TimeSelector = ({ time, setTime, label }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputLabel>{label}</InputLabel>
      <TimePicker
        value={time}
        onChange={(newValue) => {
          setTime(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export { TimeSelector };
