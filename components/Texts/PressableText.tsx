import React from "react";
import { Pressable, Text } from "native-base";
import { colors } from "../colors";
const { accent } = colors;

const PressabelText = (props: any) => {
  return (
    <Pressable p={2}>
      <Text color={accent}>{props.children}</Text>
    </Pressable>
  );
};

export default PressabelText;
