import {
  createBottomTabNavigator,
  createStackNavigator,
} from "@react-navigation/stack";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";

import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "Product";

export default function ShopNavigator({ navigation, route }) {
  //   navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Stack.Screen
        name="Home"
        component={ProductOverviewScreen}
        options={{
          title: "Get Started",
          //   tabBarIcon: ({ focused }) => (
          //     <TabBarIcon focused={focused} name="md-code-working" />
          //   ),
        }}
      />
    </Stack.Navigator>
  );
}
