export type Cart = {
  menuItemId: number;
  quantity: number;
};

export type ShoppingCart = {
  cart: Array<Cart>;
  restaurantId: number;
};
