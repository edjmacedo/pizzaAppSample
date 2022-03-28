import React from "react";
import { OrderDescription } from "../../models/Order";

interface Props {
  flatSummary: Array<OrderDescription>;
}

const CartItems = ({ flatSummary }: Props) => (
  <>
    {flatSummary.map((f) => (
      <p key={f.name}>
        {f.quantity}X {f.name} : {f.total} Kr
      </p>
    ))}
  </>
);

export default CartItems;
