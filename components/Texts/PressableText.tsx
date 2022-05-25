import React from "react";
import {  Pressable, Text } from "native-base";
import { colors } from "../colors";
const { black, white, tertiary, accent } = colors;

const PressabelText = (props: any) => {
  return (
    <Pressable
      onPress={() => {props.onPress}}
      p={2}
    >
      <Text color={accent}>{props.children}</Text>
    </Pressable>
  );
};

export default PressabelText;
