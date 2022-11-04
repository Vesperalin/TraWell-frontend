import { RideData } from './RideData';

export interface OwnRequest {
  id: number;
  ride: RideData;
  decision: string;
  reserved_seats: number;
}
