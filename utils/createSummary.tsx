import { flatten, filter, head } from "lodash";
import { Cart } from "../models/Cart";
import { Menu } from "../models/Menu";
import { OrderDescription } from "../models/Order";

type SummaryDescription = Array<OrderDescription>;

const createSummary = (cart: Array<Cart> | [], menuSummary: Array<Menu>) => {
  const summary = cart.map((c) => {
    const filtered = flatten(filter(menuSummary, (m) => m.id === c.menuItemId));
    const headerFilter = head(filtered);
    const price = headerFilter?.price || 0;
    const summaryDescription: SummaryDescription = [
      {
        quantity: c.quantity,
        price: price,
        name: headerFilter?.name || "",
        total: c.quantity * price,
      },
    ];
    return summaryDescription;
  });
  return flatten(summary);
};

export default createSummary;
