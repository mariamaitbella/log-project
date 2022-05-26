import React from "react";

import { KeyboardAvoidingView } from "native-base";
import { Platform } from "react-native";

//styled components

const KeyboardAvoidingContainer = (props: any) => {
  return (
    <KeyboardAvoidingView
     
    >
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingContainer;
