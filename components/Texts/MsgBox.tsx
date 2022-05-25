import React from "react";
import { Text } from "native-base";
import { colors } from "../colors";
const { black, white, tertiary, success, fail } = colors;

const MsgBox = (props: any) => {
  return (
    <Text textAlign="center" color={props.success ? success : fail} fontSize="sm">
      {props.children}
    </Text>
  );
};

export default MsgBox;
