import React from "react";
import { Container, HStack, Box } from "native-base";
import { colors } from "../colors";
const { primary, secondary } = colors;

export default function RowContainer(props: any) {
  return (
    <HStack space={7} alignItems="center">
      {props.children}
    </HStack>
  );
}
