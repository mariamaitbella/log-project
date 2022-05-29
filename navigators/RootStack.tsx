import React from "react";
// React navigation

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//styled components
import { colors } from "../components/colors";
const { accent, secondary, darkGray } = colors;

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import ForgotPassword from "../screens/ForgotPassword";
import ResetPassword from "../screens/ResetPassword";
import Dashboard from "../screens/Dashboard";
import Avatar from "../components/Buttons/Avatar";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: accent,
          headerStyle: {
            height: 60,
            backgroundColor: secondary,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRightContainerStyle: {
            paddingRight: 25,
          },
        }}
        initialRouteName="ResetPassword"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerTitle: "Forgot Password" }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerTitle: "Reset Password" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerStyle: {
              height: 60,
              backgroundColor: darkGray,
              borderBottomWidth: 0,
              shadowColor: "transparent",
              shadowOpacity: 0,
              elevation: 0,
            },
            headerRight: () => <Avatar />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
