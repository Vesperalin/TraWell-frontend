import axios from 'axios';

export const usersClient = axios.create({
  baseURL: 'http://localhost:8003/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
