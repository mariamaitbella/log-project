import React from "react";

import { KeyboardAvoidingView,useBreakpointValue, ScrollView, Pressable, Center, VStack, Heading, Input } from "native-base";
import { Button, Platform } from "react-native";

//styled components

const KeyboardAvoidingContainer = (props: any) => {  const isLargeScreen = useBreakpointValue({
  base: false,
  sm: false,
  md: false,
  lg: true
});
return <KeyboardAvoidingView h={{
  base: "400px",
  lg: "auto"
}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <VStack flex="1" w="100%" maxW="300">
        {props.children}
      </VStack>
  </KeyboardAvoidingView>;
};

export default KeyboardAvoidingContainer;
