import React from "react";
import { useRouter } from "next/router";
import { Message, Button, Label, Icon } from "semantic-ui-react";
import { Menu } from "../../models/Menu";
import { Cart } from "../../models/Cart";
import { Order, OrderDescription } from "../../models/Order";
import { sumBy } from "lodash";
import CartItems from "./CartItems";
import OrderNote from "../Order/OrderNote";
import createSummary from "../../utils/createSummary";
import OrderEmpty from "../Order/OrderEmpty";

interface Props {
  menuSummary: Array<Menu>;
  cart: Array<Cart>;
  handleOrder: () => void;
  order: Order;
}

const CartSummary = ({ menuSummary, cart, handleOrder, order }: Props) => {
  const router = useRouter();
  const { orderId } = order;
  const flatSummary: Array<OrderDescription> = createSummary(cart, menuSummary);

  return cart.length > 0 ? (
    <Message positive>
      <Message.Header>You order summary</Message.Header>
      {!orderId ? (
        <>
          <CartItems flatSummary={flatSummary} />
          <p>
            <b>Total:</b> {sumBy(flatSummary, "total")}
          </p>
          <Button onClick={handleOrder} primary>
            Order
          </Button>
        </>
      ) : (
        <>
          <OrderNote order={order} />
          <Label
            as="a"
            image
            onClick={() => router.push(`/cart?orderid=${orderId}`)}
          >
            <Icon name="cart" size="large" />
            <span>See more Details on your orders</span>
          </Label>
        </>
      )}
    </Message>
  ) : (
    <OrderEmpty />
  );
};

export default CartSummary;
