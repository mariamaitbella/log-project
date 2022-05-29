import React, { useRef, useState, useEffect } from "react";
import { Text, Input, View, Pressable } from "native-base";
import { colors } from "./colors";
const { secondary, white, accent, lightGray } = colors;

const OTPInputField = (props: any) => {
  const codeDigitArray = new Array(props.maxLength).fill(0);
  // REF FOR TEXT INPUT
  const textInputRef = useRef(null);

  // monitoring input focus
  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

  const handleOnBlur = () => {
    setInputContainerIsFocused(true);
    textInputRef?.current?.focus();
  };

  const handleOnPress = () => {
    setInputContainerIsFocused(false);
  };

  useEffect(() => {
    props.setPinReady(props.code.length === props.maxLength);
    return () => props.setPinReady(false);
  }, [props.code]);

  const toCodeDigitInput = (_value: string, index: number) => {
    const emptyInputChar = " ";
    const digit = props.code[index] || emptyInputChar;

    // formatting
    const isCurrentDigit = index === props.code.length;
    const isLastDigit = index === props.maxLegth - 1;
    const isCodeFull = props.code.length === props.maxLength;
    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    return (
      <View
        key={index}
        borderColor={isDigitFocused ? lightGray : secondary}
        borderBottomColor={isDigitFocused ? accent : secondary}
        borderBottomWidth={isDigitFocused ? "5px" : "3px"}
        minW="20%"
        borderWidth="3px"
        borderRadius="5px"
        p="12px"
      >
        <Text
          fontSize="22px"
          fontWeight="bold"
          textAlign="center"
          color={white}
        >
          {digit}
        </Text>
      </View>
    );
  };

  return (
    <>
      <View marginBottom="38px" justifyContent="center" alignItems="center" marginX="30px">
        <Pressable
          onPress={handleOnPress}
          width="90%"
          flexDirection="row"
          justifyContent="space-around"
        >
          {codeDigitArray.map(toCodeDigitInput)}
        </Pressable>
        <Input
          position="absolute"
          opacity={0}
          value={props.code}
          onChangeText={props.setCode}
          maxLength={props.maxLength}
          keyboardType="number-pad"
          returnKeyType="done"
          textContentType="oneTimeCode"
          ref={textInputRef}
          unBlur={handleOnBlur}
        />
      </View>
    </>
  );
};

export default OTPInputField;
