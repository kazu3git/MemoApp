import React from "react";
import { StyleSheet, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

import CircleButton from "./src/elements/CircleButton";

const App = createStackNavigator(
  {
    Home: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
    Login: { screen: LoginScreen },
    SignUp: { screen: SignupScreen },
  },
  {
    defaultNavigationOptions: {
      //↑下記から変更
      //navigationOptions: {
      headerTitle: "Memot",
      headerStyle: {
        backgroundColor: "#265366",
      },
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

export default createAppContainer(App);
