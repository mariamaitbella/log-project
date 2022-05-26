import React from "react";
import ResetPassword from "./screens/ResetPassword";
import { NativeBaseProvider, Text, Box, StatusBar, Center } from "native-base";
import { SafeAreaView } from "react-native";
import { colors } from "./components/colors";
const { primary } = colors;

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Center bg={primary} flex={1} p={7}>
        <ResetPassword />
      </Center>
    </NativeBaseProvider>
  );
}
