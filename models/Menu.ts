type Ingredient = string;

export type FoodCategory = string;

export type Menu = {
  id: number;
  category: FoodCategory;
  name: string;
  price: number;
  topping?: Array<Ingredient>;
  rank?: number;
};
