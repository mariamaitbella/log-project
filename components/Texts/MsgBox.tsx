import React from "react";
import { Text } from "native-base";
import { colors } from "../colors";
const { success, fail } = colors;

const MsgBox = (props: any) => {
  return (
    <Text
      mb={3}
      textAlign="center"
      color={props.success ? success : fail}
      fontSize="sm"
    >
      {props.children}
    </Text>
  );
};

export default MsgBox;
