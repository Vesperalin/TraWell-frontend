import { RideData } from './RideData';

export interface RideResponse {
  count: number;
  page_size: number;
  results: RideData[];
}
