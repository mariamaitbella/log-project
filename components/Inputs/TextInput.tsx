import React from "react";
import { VStack, Input, Icon } from "native-base";
import { colors } from "../colors";
const { primary, secondary, white } = colors;
import SmallText from "../Texts/SmallText";

export default function TextInput({ isPassword, ...props }: any) {
  return (
    <>
      <SmallText>{props.label}</SmallText>
      <Input
        {...props}
        size="lg"
        w="100%"
        mb={5}
        mt={2}
        color={white}
        borderColor={secondary}
        placeholder={props.placeHolder}
        _light={{
          placeholderTextColor: `${secondary}`,
        }}
        _dark={{
          placeholderTextColor: `${secondary}`,
        }}
        secureTextEntry={isPassword}
      />
    </>
  );
}
