import React from "react";
import { Text } from "native-base";
import { colors } from "../colors";
const {black, white, tertiary } = colors;


const SmallText = (props: any) => {
  return (
    <Text textAlign="left" color={tertiary}  fontSize="lg" {...props}>
      {props.children}
    </Text>
  );
};

export default SmallText;
