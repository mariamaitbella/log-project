import React, { FunctionComponent } from "react";
import { Text } from "native-base";
import { colors } from "../colors";
const { tertiary } = colors;

const BigText: FunctionComponent = (props: any) => {
  return (
    <Text
      mb={props.mb}
      textAlign="left"
      color={tertiary}
      fontSize="3xl"
      fontWeight="bold"
    >
      {props.children}
    </Text>
  );
};

export default BigText;
