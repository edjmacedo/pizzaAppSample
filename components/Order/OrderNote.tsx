import React from "react";
import { Order } from "../../models/Order";
import formatDateTime from "../../utils/formatDate";

interface Props {
  order: Order;
}

const OrderNote = ({ order }: Props) => (
  <>
    <p>
      <b>Status: </b>
      {order.status}
    </p>
    <p>
      <b>Ordered At: </b>
      {formatDateTime(order.orderedAt || "")}
    </p>
    <p>
      <b>Estimated delivery: </b>
      {formatDateTime(order.esitmatedDelivery || "")}
    </p>
    <p>
      <b>Total Price: </b>
      {order.totalPrice} Kr
    </p>
  </>
);

export default OrderNote;
