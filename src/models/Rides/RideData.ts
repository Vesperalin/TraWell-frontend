export interface RideData {
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
  price: string;
  seats: number;
  recurrent: boolean;
  automatic_confirm: boolean;
  available_seats: number;
  description: string;
  driver: {
    user_id: number;
    first_name: string;
    last_name: string;
    avg_rate: string;
    avatar: string;
    private: boolean;
  };
  duration: {
    hours: number;
    minutes: number;
  };
  vehicle: {
    vehicle_id: number;
    make: string;
    model: string;
    color: string;
  };
}
