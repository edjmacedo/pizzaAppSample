import { Cart } from "./Cart";

type StimatedDeliveryDateTime = string;
type OrderedAtDateTime = string;

export type Order = {
  esitmatedDelivery?: StimatedDeliveryDateTime;
  orderId?: number;
  orderedAt?: OrderedAtDateTime;
  status?: string;
  totalPrice?: number;
  cart?: Array<Cart>;
  restuarantId?: number;
};

export type OrderDescription = {
  quantity: number;
  price: number;
  name: string;
  total: number;
};
