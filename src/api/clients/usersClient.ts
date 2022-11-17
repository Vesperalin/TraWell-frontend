import axios from 'axios';

export const usersClient = axios.create({
  baseURL: 'http://localhost:9000/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
