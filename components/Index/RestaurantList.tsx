import { Card } from "semantic-ui-react";
import { Restaurants } from "../../models/Restaurants";

type Props = {
  restaurants: Restaurants;
};

const Restaurantist = ({ restaurants }: Props) => {
  const mapProductsToItems = (restaurants: Restaurants) => {
    if (restaurants && restaurants.length) {
      return restaurants.map((restaurant) => ({
        header: restaurant.name,
        meta: `${restaurant.address1} ${restaurant.address2}`,
        color: "teal",
        fluid: true,
        childKey: restaurant.id,
        href: `/menu?id=${restaurant.id}`,
      }));
    } else {
      return [];
    }
  };

  return (
    <Card.Group
      stackable
      itemsPerRow="3"
      centered
      items={mapProductsToItems(restaurants)}
    />
  );
};

export default Restaurantist;
