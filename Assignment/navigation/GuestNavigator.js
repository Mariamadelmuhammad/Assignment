import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, DetailedScreen } from "../src/screens/Screens";

export const GuestNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detailed" component={DetailedScreen} />
    </Stack.Navigator>
  );
};

export default GuestNavigator;
