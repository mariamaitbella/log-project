import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//styled components
import { colors } from "../colors";
import { View } from "native-base";
const { primary, secondary, accent } = colors;

const Avatar = (props: any) => {
  return (
    <View
      bg={primary}
      flexDirection="column"
      h={45}
      w={45}
      borderRadius={15}
      justifyContent="center"
      alignItems="center"
      borderWidth={2}
      borderColor={secondary}
      {...props}
    >
      <MaterialCommunityIcons name="account" size={35} color={accent} />
    </View>
  );
};

export default Avatar;
