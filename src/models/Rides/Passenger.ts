export interface Passenger {
  user_id: number;
  user: {
    user_id: number;
    first_name: string;
    last_name: string;
    avg_rate: string;
    avatar: string;
    private: boolean;
  };
  decision: string;
}
