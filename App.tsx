import React from "react";
import Login from "./screens/Login";
import { NativeBaseProvider, Text, Box } from "native-base";


export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
}
