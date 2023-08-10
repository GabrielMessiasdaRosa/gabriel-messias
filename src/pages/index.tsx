import type { NextPage } from "next";
import HomeScreen from "../screens/home-screen";

export type HomePage = {};

const HomePage: NextPage = ({}: HomePage) => {
  return <HomeScreen />;
};
export default HomePage;
