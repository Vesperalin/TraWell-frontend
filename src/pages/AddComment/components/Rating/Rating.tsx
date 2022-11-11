import Star from '@mui/icons-material/Star';
import { Rating as MUIRating } from '@mui/material';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStyles, Label } from './Rating.style';

interface Props {
  rating: number | null;
  setRating: (newValue: number | null) => void;
}

export const Rating = ({ rating, setRating }: Props) => {
  const { icon } = useStyles();
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <div>
      <Label variant='h4'>Rating</Label>
      <MUIRating
        value={rating}
        size={isSmallScreen ? 'small' : 'medium'}
        emptyIcon={<Star className={icon} />}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
    </div>
  );
};
