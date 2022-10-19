import { RideData } from './RideData';

export interface RideResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: RideData[];
}
