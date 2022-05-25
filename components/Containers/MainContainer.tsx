import React from "react";
import { Container, Center, VStack, Box } from "native-base";
import { colors } from "../colors";
const { primary, secondary } = colors;

export default function MainContainer(props: any) {
  return (
    <VStack p={5} backgroundColor={primary} flex={1}>
      
<Container {...props}>{props.children}</Container>

   
    </VStack>
  );
}
