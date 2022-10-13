import FormControl from '@mui/material/FormControl';
import Rating from '@mui/material/Rating';
import { RatingFilterType } from '../../models/FilterType';
import { StyledFormLabel } from './RatingFilter.style';

interface Props {
  filter: RatingFilterType;
}

export const RatingFilter = ({ filter }: Props) => {
  const { value, setValue } = filter;

  return (
    <div>
      <FormControl>
        <StyledFormLabel>Driver review:</StyledFormLabel>
        <Rating
          name='simple-controlled'
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </FormControl>
    </div>
  );
};
