import React from "react";
import { NextPage } from "next";
import axios from "axios";
import RestaurantList from "../components/Index/RestaurantList";
import baseUrl from "../utils/baseUrl";
import { Restaurants } from "../models/Restaurants";

interface Props {
  restaurants: Restaurants;
}

const Home: NextPage<Props> = ({ restaurants }: Props) => {
  return (
    <>
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  const url = `${baseUrl}/restaurants/`;
  // fetch data on serve
  const response = await axios.get(url);
  // return response data as an object
  return { restaurants: response.data };
  // note: this object will be merged with existing props
};

export default Home;
