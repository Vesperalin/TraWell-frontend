import axios from 'axios';

export const reviewsClient = axios.create({
  baseURL: 'http://trawell.westeurope.cloudapp.azure.com:9000/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
