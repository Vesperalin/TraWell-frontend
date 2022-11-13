export interface Comment {
  review_id: number;
  stars: number;
  description: string;
  was_rated_driver: boolean;
  created_on: string;
  reviewer: {
    user_id: number;
    first_name: string;
    avg_rate: string;
    avatar: string;
    email: string;
  };
}
