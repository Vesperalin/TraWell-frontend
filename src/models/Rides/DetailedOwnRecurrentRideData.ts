export interface DetailedOwnRecurrentRideData {
  area_from: string;
  area_to: string;
  automatic_confirm: boolean;
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
  description: string;
  driver: {
    user_id: number;
    first_name: string;
    last_name: string;
    avg_rate: string;
    avatar: string;
    private: boolean;
  };
  duration: { hours: number; minutes: number };
  end_date: string;
  frequence: 8;
  frequency_type: string;
  occurrences: null;
  price: string;
  ride_id: 20;
  seats: 2;
  start_date: string;
  vehicle: {
    vehicle_id: number;
    make: string;
    model: string;
    color: string;
  };
}
