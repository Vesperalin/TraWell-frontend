import FormControl from '@mui/material/FormControl';
import { InputFilterType } from '../../models/FilterType';
import { StyledFormLabel } from './InputFilter.style';

interface Props {
  filter: InputFilterType;
}

export const InputFilter = ({ filter }: Props) => {
  const { from, setFrom, to, setTo } = filter;

  return (
    <div>
      <FormControl>
        <StyledFormLabel>Places</StyledFormLabel>
      </FormControl>
    </div>
  );
};
