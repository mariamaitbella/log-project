import React from "react";
import { Text } from "native-base";
import { colors } from "../colors";
const { tertiary } = colors;

const RegularText = (props: any) => {
  return (
    <Text style={props.style} mb={4} color={tertiary} fontSize="lg">
      {props.children}
    </Text>
  );
};

export default RegularText;
