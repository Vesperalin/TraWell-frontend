import { useQuery } from 'react-query';
import { osmnamesCityAutocompleteClient } from '~/api/clients';
import { OsmnamesPlace } from '~/models/OsmnamesPlace';

export default {
  useAutocompletePlaces: (phrase: string) => {
    return useQuery<OsmnamesPlace[], Error>(['phrase', phrase], async () => {
      const response = await osmnamesCityAutocompleteClient.get(`${phrase}.js`);
      return response.data.results;
    });
  },
};
