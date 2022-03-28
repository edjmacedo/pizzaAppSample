import React, { useState, SyntheticEvent, useEffect } from "react";
import { Segment, Message } from "semantic-ui-react";
import axios from "axios";
import { NextPage } from "next";
import { sortedUniq, filter, uniqBy } from "lodash";
import MenuSummary from "../components/Menu/MenuSummary";
import MenuFilterOption from "../components/Menu/MenuFilterOption";
import RestaurantCard from "../components/Index/RestaurantCard";
import CartSummary from "../components/Cart/CartSummary";
import baseUrl from "../utils/baseUrl";
import catchErrors from "../utils/catchErrors";
import { Menu } from "../models/Menu";
import { Restaurant } from "../models/Restaurants";
import { Cart } from "../models/Cart";
import { Order } from "../models/Order";

interface Props {
  menuSummary: Array<Menu>;
  restaurant: Restaurant;
}

const Menu: NextPage<Props> = ({ menuSummary, restaurant }: Props) => {
  const [menu, setMenu] = useState<Array<Menu>>([]);
  const [cart, setCart] = useState<Array<Cart>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<Order>({});
  const [error, setError] = React.useState<string>("");
  useEffect(() => {
    setMenu(menuSummary);
  }, [menuSummary]);
  const category = sortedUniq(menuSummary.map((m) => m.category));
  const handleFilter = (event: SyntheticEvent, value: string) => {
    event.preventDefault();
    const filterMenu = filter(menuSummary, (f) => f.category === value);
    setMenu(filterMenu.length ? filterMenu : menuSummary);
  };

  const handleShoppingCart = (event: string, value: Menu) => {
    const { id } = value;
    if (cart.length === 0) {
      setCart([
        {
          menuItemId: id,
          quantity: Number(event),
        },
      ]);
    } else {
      const newCart = cart.map((c) => {
        if (c.menuItemId === value.id) {
          return { menuItemId: c.menuItemId, quantity: Number(event) };
        }
        return { menuItemId: id, quantity: Number(event) };
      });
      const newCartItems = newCart.concat(cart);
      const summarize = filter(
        uniqBy(newCartItems, "menuItemId"),
        (f) => f.quantity > 0
      );
      setCart(summarize);
    }
  };

  const handleOrder = async () => {
    const { id } = restaurant;
    const orderRequest = {
      cart: cart,
      restaurantId: id,
    };
    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/orders/`;
      const payload = orderRequest;
      const res = await axios.post(url, payload);
      setOrder(res.data);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Segment loading={loading}>
      <RestaurantCard restaurant={restaurant} />
      <CartSummary
        menuSummary={menuSummary}
        cart={cart}
        handleOrder={handleOrder}
        order={order}
      />
      {error !== "" && <Message error header="Oops!" content={error} />}
      <MenuFilterOption category={category} handleFilter={handleFilter} />
      <MenuSummary
        menuSummary={menu}
        handleShoppingCart={handleShoppingCart}
        cart={cart}
        order={order}
      />
    </Segment>
  );
};

Menu.getInitialProps = async ({ query }) => {
  const { id } = query;
  const url1 = `${baseUrl}/restaurants/${id}/menu?category=Pizza&orderBy=rank`;
  const url2 = `${baseUrl}/restaurants/${id}`;
  const [menu, restaurant] = await Promise.all([
    axios.get(url1),
    axios.get(url2),
  ]);
  return { menuSummary: menu.data, restaurant: restaurant.data };
};

export default Menu;
