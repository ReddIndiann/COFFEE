import * as React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Feed from "./screens/tabScreens/Feed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Settings from "./screens/tabScreens/Settings";
import Notifications from "./screens/tabScreens/Notifications";
import { Ionicons } from "@expo/vector-icons";
import TweetDetailScreen from "./screens/homeStack/TweetDetailsScreen";
import { Image, Pressable, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import Payments from "./screens/drawerScreens/Payments";
import SplashScreen from "./screens/tabScreens/SplashScreen";
import HomePagee from "./screens/tabScreens/HomePagee";
import Reviewpage from "./screens/tabScreens/Reviewpage";
import Cart from "./screens/tabScreens/Cart";
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
       <HomeStack.Screen name="/" component={Cart} />
        <HomeStack.Screen name="feed" component={HomePagee} />
       
    </HomeStack.Navigator>
  );
}

export default function Navigation() {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <HomeStackGroup />
      {/* <DrawerGroup /> */}
    </NavigationContainer>
  );
}