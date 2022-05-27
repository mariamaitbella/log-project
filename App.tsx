import React from "react";
import Dashboard from "./screens/Dashboard";
import { NativeBaseProvider, Text, Box, StatusBar, Center } from "native-base";
import { SafeAreaView } from "react-native";
import { colors } from "./components/colors";
const { primary } = colors;

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"light-content"} />
      <Dashboard />
    </NativeBaseProvider>
  );
}
