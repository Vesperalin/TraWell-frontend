import axios from 'axios';

export const cityAutocompleteClient = axios.create({
  baseURL: 'https://search.osmnames.org/PL/q/',
  params: {
    key: import.meta.env.VITE_OSMNAMES_API_KEY,
  },
});
