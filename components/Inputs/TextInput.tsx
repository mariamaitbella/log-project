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
        isDisabled={!props.pinReady}
        size="lg"
        w="100%"
        mb={5}
        mt={2}
        h="54px"
        color={white}
        borderColor={secondary}
        borderWidth={3}
        borderRadius={12}
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
