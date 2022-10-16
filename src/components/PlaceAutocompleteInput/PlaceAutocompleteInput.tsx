import LocationOnIcon from '@mui/icons-material/LocationOn';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { debounce } from 'lodash';
import { useState, useEffect, SyntheticEvent, useCallback } from 'react';
import AutocompletePlaceService from '~/api/services/AutocompletePlaceService';
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { transformPlaceToText } from '~/utils/TransformPlaceToText';
import { useStyles, StyledTextField, InputWrapper, InnerBox } from './PlaceAutocompleteInput.style';

interface Props {
  value: AutocompletePlace | null;
  setValue(value: AutocompletePlace | null): void;
  label: string;
  isSmall?: boolean;
}

export const PlaceAutocompleteInput = ({ value, setValue, label, isSmall }: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const { autocomplete } = useStyles(theme);
  const [inputValue, setInputValue] = useState('');
  const { data, refetch, isLoading, isError } =
    AutocompletePlaceService.useAutocompletePlaces(inputValue);
  const options: readonly AutocompletePlace[] = data ? data : [];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayRefetch = useCallback(debounce(refetch, 200), []);

  useEffect(() => {
    if (inputValue.trim() !== '') {
      delayRefetch();
    }
  }, [delayRefetch, inputValue, refetch]);

  useEffect(() => {
    return () => {
      delayRefetch.cancel();
    };
  }, [delayRefetch]);

  return (
    <Autocomplete
      className={autocomplete}
      getOptionLabel={(option) =>
        typeof option === 'string'
          ? option
          : transformPlaceToText(option.name, option.state, option.country, option.county)
      }
      size={isSmallScreen || isSmall ? 'small' : 'medium'}
      options={options}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      autoComplete
      includeInputInList
      filterSelectedOptions
      loading={isLoading}
      loadingText={isError ? 'No options' : 'Loading ...'}
      noOptionsText={inputValue.trim() === '' ? 'Type place name' : 'No options'}
      value={value}
      onChange={(_event: SyntheticEvent<Element, Event>, newValue: AutocompletePlace | null) => {
        setValue(newValue);
      }}
      onInputChange={(_event: SyntheticEvent<Element, Event>, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          fullWidth
          variant='outlined'
          placeholder={label}
        />
      )}
      renderOption={(props, option) => {
        const { name, state, country, county, id } = option;
        const place = transformPlaceToText(name, state, country, county);

        return (
          <li
            {...props}
            key={id}
          >
            <InputWrapper
              container
              fontSize={isSmallScreen || isSmall ? 'small' : 'medium'}
            >
              <Grid
                item
                fontSize={isSmallScreen ? 'small' : 'medium'}
              >
                <InnerBox component={LocationOnIcon} />
              </Grid>
              <Grid
                item
                xs
                fontSize={isSmallScreen || isSmall ? 'small' : 'medium'}
              >
                {place}
              </Grid>
            </InputWrapper>
          </li>
        );
      }}
    />
  );
};
