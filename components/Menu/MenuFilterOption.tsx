import React, { SyntheticEvent } from "react";
import { Button } from "semantic-ui-react";
import { FoodCategory } from "../../models/Menu";

interface Props {
  category: Array<FoodCategory>;
  handleFilter: (event: SyntheticEvent, value: string) => void;
}

const MenuFilterOption = ({ category, handleFilter }: Props) => (
  <Button.Group>
    {category.map((c) => (
      <Button key={c} onClick={(e) => handleFilter(e, c)}>
        {c}
      </Button>
    ))}
    <Button key="clear" onClick={(e) => handleFilter(e, "clear")}>
      Clear
    </Button>
  </Button.Group>
);

export default MenuFilterOption;
