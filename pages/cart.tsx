import React from "react";
import { Segment } from "semantic-ui-react";
import axios from "axios";
import { NextPage } from "next";
import RestaurantCard from "../components/Index/RestaurantCard";
import OrderSummary from "../components/Order/OrderSummary";
import OrderEmpty from "../components/Order/OrderEmpty";
import baseUrl from "../utils/baseUrl";
import { Menu } from "../models/Menu";
import { Restaurant } from "../models/Restaurants";
import { Cart } from "../models/Cart";
import { Order } from "../models/Order";

interface Props {
  order: Order;
  restaurant: Restaurant;
  menuSummary: Array<Menu>;
}

const Cart: NextPage<Props> = ({ order, menuSummary, restaurant }: Props) => {
  if (order) {
    return (
      <Segment>
        <RestaurantCard restaurant={restaurant} />
        <OrderSummary menuSummary={menuSummary} order={order} />
      </Segment>
    );
  }
  return (
    <Segment>
      <OrderEmpty />
    </Segment>
  );
};

Cart.getInitialProps = async ({ query }) => {
  const { orderid } = query;
  if (orderid) {
    const url1 = `${baseUrl}/orders/${orderid}`;
    const order = await axios.get(url1);
    const url2 = `${baseUrl}/restaurants/${order.data.restuarantId}`;
    const url3 = `${baseUrl}/restaurants/${order.data.restuarantId}/menu?category=Pizza&orderBy=rank`;
    const [restaurant, menu] = await Promise.all([
      axios.get(url2),
      axios.get(url3),
    ]);
    return {
      order: order.data,
      restaurant: restaurant.data,
      menuSummary: menu.data,
    };
  }
  return { order: null, restaurant: null, menuSummary: null };
};

export default Cart;
