import * as React from "react";
import { NativeBaseProvider, Text, Box, StatusBar, Center } from "native-base";
import { SafeAreaView } from "react-native";
import { colors } from "./components/colors";
import RootStack from "./navigators/RootStack";
const { primary } = colors;

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"light-content"} />
      <RootStack />
    </NativeBaseProvider>
  );
}
