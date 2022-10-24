import axios from 'axios';

export const ridesClient = axios.create({
  baseURL: 'http://localhost:8001/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
