import { OwnRide } from './OwnRide';

export interface OwnRideResponse {
  page_size: number;
  count: number;
  results: OwnRide[];
}
