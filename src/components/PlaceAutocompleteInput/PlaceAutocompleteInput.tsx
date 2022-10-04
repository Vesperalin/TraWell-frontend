import LocationOnIcon from '@mui/icons-material/LocationOn';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useEffect, SyntheticEvent } from 'react';
import AutocompletePlaceService from '~/api/services/AutocompletePlaceService';
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { useStyles, StyledTextField, InputWrapper, InnerBox } from './PlaceAutocompleteInput.style';

interface Props {
  value: AutocompletePlace | null;
  setValue(value: AutocompletePlace | null): void;
  label: string;
}

export const PlaceAutocompleteInput = ({ value, setValue, label }: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const { autocomplete } = useStyles(theme);
  const [inputValue, setInputValue] = useState('');
  const { data, refetch, isLoading } = AutocompletePlaceService.useAutocompletePlaces(inputValue);
  const options: readonly AutocompletePlace[] = data ? data : [];

  useEffect(() => {
    if (inputValue.trim() !== '') {
      refetch();
    }
  }, [inputValue, refetch]);

  const transformToText = (name: string, state: string, country: string, county?: string) => {
    return `${name + (name === '' ? '' : ', ')}${
      county ? county + (county === '' ? '' : ', ') : ''
    }${state + (state === '' ? '' : ', ')}${country}`;
  };

  return (
    <Autocomplete
      className={autocomplete}
      getOptionLabel={(option) =>
        typeof option === 'string'
          ? option
          : transformToText(option.name, option.state, option.country, option.county)
      }
      size={isSmallScreen ? 'small' : 'medium'}
      options={options}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      autoComplete
      includeInputInList
      filterSelectedOptions
      loading={isLoading}
      loadingText='Loading ...'
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
        const place = transformToText(name, state, country, county);

        return (
          <li
            {...props}
            key={id}
          >
            <InputWrapper
              container
              fontSize={isSmallScreen ? 'small' : 'medium'}
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
                fontSize={isSmallScreen ? 'small' : 'medium'}
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
