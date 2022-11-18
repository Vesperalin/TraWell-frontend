import Star from '@mui/icons-material/Star';
import { Rating as MUIRating } from '@mui/material';
import { useStyles, Label } from './Rating.style';

interface Props {
  rating: number | null;
  setRating: (newValue: number | null) => void;
}

export const Rating = ({ rating, setRating }: Props) => {
  const { icon } = useStyles();

  return (
    <div>
      <Label variant='h4'>Rating</Label>
      <MUIRating
        id='rating-stars-picker'
        value={rating}
        emptyIcon={<Star className={icon} />}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
    </div>
  );
};
