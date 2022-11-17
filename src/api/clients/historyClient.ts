import axios from 'axios';

export const historyClient = axios.create({
  baseURL: 'http://localhost:8002/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
