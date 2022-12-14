import { useQuery } from 'react-query';
import { cityAutocompleteClient } from '~/api/clients';
import { AutocompletePlace } from '~/models/AutocompletePlace';

interface Response {
  count: number;
  nextIndex: number;
  startIndex: number;
  totalResults: number;
  results: AutocompletePlace[];
}

export default {
  useAutocompletePlaces: (phrase: string) => {
    return useQuery<AutocompletePlace[], Error>(
      ['phrase', phrase],
      async () => {
        const response = await cityAutocompleteClient.get<Response>(`${phrase}.js`);
        const data = response.data.results.filter(
          (result) =>
            result.type === 'city' ||
            result.type === 'state_district' ||
            result.type === 'village' ||
            result.type === 'city_district',
        );
        return data;
      },
      {
        enabled: false,
        refetchOnWindowFocus: false,
        retry: 3,
      },
    );
  },
};
