import { Request } from './Request';

export interface RequestsResponse {
  page_size: number;
  count: number;
  results: Request[];
}
