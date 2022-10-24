export interface OwnRide {
  ride_id: number;
  city_from: {
    city_id: number;
    name: string;
    county: string;
    state: string;
    lat: string;
    lng: string;
  };
  city_to: {
    city_id: number;
    name: string;
    county: string;
    state: string;
    lat: string;
    lng: string;
  };
  area_from: string;
  area_to: string;
  start_date: string;
  recurrent: boolean;
  duration: {
    hours: number;
    minutes: number;
  };
  can_driver_edit: boolean;
  driver: {
    user_id: number;
    first_name: string;
    last_name: string;
    avg_rate: string;
    avatar: string;
    private: boolean;
  };
}
