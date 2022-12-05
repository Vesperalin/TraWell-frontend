import axios from 'axios';

export const cityAutocompleteClient = axios.create({
  baseURL: 'http://trawell.westeurope.cloudapp.azure.com:5000/',
  params: {
    key: import.meta.env.VITE_OSMNAMES_API_KEY,
  },
});
