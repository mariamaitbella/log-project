import * as React from "react";
import { Center, View } from "native-base";

//styled components
import { colors } from "../colors";
const { primary } = colors;

const MainContainer = (props: any) => {
  return (
    <View bg={props.bg || primary} p={6} flex={1}>
      {props.children}
    </View>
  );
};

export default MainContainer;
