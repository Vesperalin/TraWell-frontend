import { RideData } from './RideData';

export interface Request {
  id: number;
  ride: RideData;
  decision: string;
  reserved_seats: number;
  user?: {
    user_id: number;
    first_name: string;
    last_name: string;
    avg_rate: string;
    avatar: string;
    private: boolean;
  };
}
