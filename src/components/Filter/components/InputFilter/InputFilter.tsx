import Box from '@mui/material/Box';
import { PlaceAutocompleteInput } from '~/components/PlaceAutocompleteInput';
import { InputFilterType } from '../../models/FilterType';
import { StyledFormControl, StyledFormLabel } from './InputFilter.style';

interface Props {
  filter: InputFilterType;
}

export const InputFilter = ({ filter }: Props) => {
  const { from, setFrom, to, setTo } = filter;

  return (
    <Box>
      <StyledFormControl fullWidth>
        <StyledFormLabel>Places:</StyledFormLabel>
        <PlaceAutocompleteInput
          value={from}
          setValue={setFrom}
          label='From'
          isSmall={true}
        />
        <PlaceAutocompleteInput
          value={to}
          setValue={setTo}
          label='To'
          isSmall={true}
        />
      </StyledFormControl>
    </Box>
  );
};
