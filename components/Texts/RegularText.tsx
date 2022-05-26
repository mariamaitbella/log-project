import React from "react";
import { Text } from "native-base";
import { colors } from "../colors";
const { tertiary } = colors;

const RegularText = (props: any) => {
  return (
    <Text mb={6} color={tertiary} fontSize="md">
      {props.children}
    </Text>
  );
};

export default RegularText;
