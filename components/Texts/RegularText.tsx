import React from "react";
import { Text } from "native-base";
import { colors } from "../colors";
const {black, white, tertiary } = colors;


const RegularText = (props: any) => {
  return (
    <Text mt={7} mb={9} textAlign="left" color={tertiary}  fontSize="md">
      {props.children}
    </Text>
  );
};

export default RegularText;
