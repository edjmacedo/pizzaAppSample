import React from "react";
import { Message, Divider } from "semantic-ui-react";
import { Menu } from "../../models/Menu";
import { Order, OrderDescription } from "../../models/Order";
import OrderNote from "./OrderNote";
import CartItems from "../Cart/CartItems";
import createSummary from "../../utils/createSummary";

interface Props {
  menuSummary: Array<Menu>;
  order: Order;
}

const OrderSummary = ({ menuSummary, order }: Props) => {
  const { cart } = order;
  const cartItems = cart?.length ? cart : [];
  const flatSummary: Array<OrderDescription> = createSummary(
    cartItems,
    menuSummary
  );

  return (
    <Message positive>
      <Message.Header>You order summary</Message.Header>
      <>
        <OrderNote order={order} />
        <Divider />
        <CartItems flatSummary={flatSummary} />
      </>
    </Message>
  );
};

export default OrderSummary;
