import React from "react";
import { Card, Divider } from "semantic-ui-react";
import { Restaurant } from "../../models/Restaurants";

interface Props {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: Props) => (
  <>
    <Card
      image="https://midias.agazeta.com.br/2021/11/24/pizzas-da-bonta-forno-e-cucina-na-prainha-vila-velha--649867.png"
      header={restaurant.name}
      meta={`${restaurant.address1} ${restaurant.address2}`}
      description="Best pizza restaurant in town"
      centered
    />
    <Divider />
  </>
);

export default RestaurantCard;
