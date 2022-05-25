import React, { FunctionComponent, useState } from "react";
import { Box, Center, Container, Heading, StatusBar, Text } from "native-base";
import MainContainer from "../components/Containers/MainContainer";
import { colors } from "../components/colors";
const { white, primary, secondary } = colors;
import KeyboardAvoidingContainer from "../components/Containers/KeyboardAvoidingContainer";
import RegularText from "../components/Texts/RegularText";
import TextInput from "../components/Inputs/TextInput";
import { Formik } from "formik";
import MsgBox from "../components/Texts/MsgBox";

const Login: FunctionComponent = () => {
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setisSuccessMessage] = useState(false);

  return (
    <Center backgroundColor={primary} flex={1}>
      <Container>
        <KeyboardAvoidingContainer backgroundColor={white}>
          <RegularText>Enter your accaount credentials</RegularText>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <>
                <TextInput
                  label="Email Address"
                  placeHolder="Email"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  value={values.email}
                />
                <TextInput
                  label="Password"
                  placeHolder="* * * * * * * *"
                  keyboardType="email-address"
                  onChangeText={handleChange("password")}
                  value={values.password}
                  isPassword={true}
                />
                <MsgBox mb={3} success={isSuccessMessage}>{message || "an error here "}</MsgBox>
              </>
            )}
          </Formik>
        </KeyboardAvoidingContainer>
      </Container>
    </Center>
  );
};
export default Login;
