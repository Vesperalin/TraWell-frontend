import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';

interface Props {
  date: Dayjs | null;
  setDate: (date: Dayjs | null) => void;
  label: string;
}

const DateSelector = ({ date, setDate, label }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disablePast
        label={label}
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export { DateSelector };
