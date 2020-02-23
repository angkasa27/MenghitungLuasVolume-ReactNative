import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import BerandaScreen from "./screen/BerandaScreen";
import KerucutScreen from "./screen/KerucutScreen";
import TabungScreen from "./screen/TabungScreen";
import BalokScreen from "./screen/BalokScreen";

const AppNavigator = createDrawerNavigator({
  Beranda: { screen: BerandaScreen },
  Balok: { screen: BalokScreen },
  Kerucut: { screen: KerucutScreen },
  Tabung: { screen: TabungScreen }
});

export default createAppContainer(AppNavigator);
