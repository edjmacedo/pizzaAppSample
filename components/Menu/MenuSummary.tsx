import React from "react";
import { findIndex } from "lodash";
import { Label, Item, Divider } from "semantic-ui-react";
import NumberInput from "semantic-ui-react-numberinput";
import { Menu } from "../../models/Menu";
import { Cart } from "../../models/Cart";
import { Order } from "../../models/Order";

interface Props {
  menuSummary: Array<Menu>;
  handleShoppingCart: (value: string, menu: Menu) => void;
  cart: Array<Cart>;
  order: Order;
}

interface Logo {
  [key: string]: string;
}

const MenuSummary = ({
  menuSummary,
  handleShoppingCart,
  cart,
  order,
}: Props) => {
  const { orderId } = order;
  const Logo: Logo = {
    Pizza:
      "https://image.similarpng.com/very-thumbnail/2020/05/Pizza-logo-vector-PNG.png",
    Dryck:
      "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/15660546/image/aa463221c9ab5475dac50ebc20085483",
    Tillbehör:
      "https://www.paleoteket.se/wp-content/uploads/2020/12/nektarin-salsa.jpg",
  };

  return (
    <Item.Group relaxed>
      {menuSummary.map((menu) => (
        <React.Fragment key={menu.id}>
          <Item key={menu.name}>
            <Item.Image size="small" src={Logo[menu.category]} />
            <Item.Content verticalAlign="middle">
              <Item.Header>{menu.name}</Item.Header>
              <Item.Description>
                <div>
                  <p>
                    <b>Price:</b> {menu.price} Kr
                  </p>
                  {menu.topping && (
                    <div>
                      <span>
                        <b>Topping: </b>
                        <Label.Group>
                          {menu.topping.map((t, i) => (
                            <Label key={`${t}${i}`}>{t}</Label>
                          ))}
                        </Label.Group>
                      </span>
                    </div>
                  )}
                  <p>
                    <b>Category:</b> {menu.category}
                  </p>
                </div>
              </Item.Description>
              {!orderId && (
                <Item.Extra>
                  <span>Add to cart</span>
                  <NumberInput
                    value={
                      cart[
                        findIndex(cart, { menuItemId: menu.id })
                      ]?.quantity.toString() || "0"
                    }
                    onChange={(v: string) => handleShoppingCart(v, menu)}
                  />
                </Item.Extra>
              )}
            </Item.Content>
          </Item>
          <Divider />
        </React.Fragment>
      ))}
    </Item.Group>
  );
};

export default MenuSummary;
