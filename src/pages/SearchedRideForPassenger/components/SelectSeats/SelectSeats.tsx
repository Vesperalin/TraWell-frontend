import { Select, SelectChangeEvent, Skeleton } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { useStyles } from './SelectSeats.style';

interface Props {
  isLoading: boolean;
  seatsToBook: string;
  setSeatsToBook: (value: string) => void;
  availableSeats: number | undefined;
}

export const SelectSeats = ({ isLoading, seatsToBook, availableSeats, setSeatsToBook }: Props) => {
  const [possibleSeatsToBook, setPossibleSeatsToBook] = useState<number[]>([]);
  const { select } = useStyles();

  useEffect(() => {
    setSeatsToBook('1');
    if (!isLoading && availableSeats) {
      setPossibleSeatsToBook(Array.from({ length: availableSeats }, (_, i) => i + 1));
    }
  }, [availableSeats, isLoading, setSeatsToBook]);

  const handleChange = (event: SelectChangeEvent) => {
    setSeatsToBook(event.target.value);
  };

  if (isLoading || !availableSeats) {
    return (
      <Skeleton
        width={100}
        height={40}
      />
    );
  } else {
    return (
      <FormControl>
        <InputLabel id='seats-to-book-label'>Seats to book</InputLabel>
        <Select
          labelId='seats-to-book-label'
          label='Seats to book'
          value={seatsToBook}
          onChange={handleChange}
          size='small'
          className={select}
        >
          {possibleSeatsToBook.map((elem) => (
            <MenuItem
              key={elem.toString()}
              value={elem.toString()}
            >
              {elem.toString()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
};
