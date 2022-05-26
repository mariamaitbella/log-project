import React from "react";
import {  HStack } from "native-base";

export default function RowContainer(props: any) {
  return (
    <HStack space={7} alignItems="center">
      {props.children}
    </HStack>
  );
}
