import { Select, SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { useStyles } from './SelectSeats.style';

interface Props {
  isLoading: boolean;
  availableSeats: number | undefined;
  handleChange: (event: SelectChangeEvent) => void;
}

export const SelectSeats = ({ isLoading, availableSeats, handleChange }: Props) => {
  const [possibleSeatsToBook, setPossibleSeatsToBook] = useState<number[]>([]);
  const { select } = useStyles();

  useEffect(() => {
    if (!isLoading && availableSeats) {
      setPossibleSeatsToBook(Array.from({ length: availableSeats }, (_, i) => i + 1));
    }
  }, [availableSeats, isLoading]);

  if (isLoading || !availableSeats) {
    return <></>;
  } else {
    return (
      <FormControl>
        <InputLabel id='seats-to-book-label'>Seats to book</InputLabel>
        <Select
          labelId='seats-to-book-label'
          label='Seats to book'
          onChange={handleChange}
          size='small'
          className={select}
          defaultValue='1'
        >
          {possibleSeatsToBook.map((elem) => (
            <MenuItem
              key={elem}
              value={elem}
            >
              {elem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
};
