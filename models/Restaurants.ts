export type Restaurant = {
  id: number;
  name: string;
  address1: string;
  address2: string;
  latitude: number;
  longitude: number;
};

export type Restaurants = Array<Restaurant>;
