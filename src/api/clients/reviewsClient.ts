import axios from 'axios';

export const reviewsClient = axios.create({
  baseURL: 'http://localhost:8004/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
