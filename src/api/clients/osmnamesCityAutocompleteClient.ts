import axios from 'axios';

export const osmnamesCityAutocompleteClient = axios.create({
  baseURL: 'https://search.osmnames.org/q/',
  params: {
    key: import.meta.env.VITE_OSMNAMES_API_KEY,
  },
});
