import { RideData } from './RideData';

export interface Request {
  id: number;
  ride: RideData;
  decision: string;
  reserved_seats: number;
}
