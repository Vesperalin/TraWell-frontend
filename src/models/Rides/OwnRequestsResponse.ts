import { OwnRequest } from './OwnRequest';

export interface OwnRequestsResponse {
  page_size: number;
  count: number;
  results: OwnRequest[];
}
