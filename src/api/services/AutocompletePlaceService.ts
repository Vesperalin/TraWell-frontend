import { useQuery } from 'react-query';
import { cityAutocompleteClient } from '~/api/clients';
import { AutocompletePlace } from '~/models/AutocompletePlace';

export default {
  useAutocompletePlaces: (phrase: string) => {
    return useQuery<AutocompletePlace[], Error>(
      ['phrase', phrase],
      async () => {
        const response = await cityAutocompleteClient.get(`${phrase}.js`);
        return response.data.results;
      },
      {
        enabled: false,
      },
    );
  },
};
