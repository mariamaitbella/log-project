import React, { FunctionComponent, useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  StatusBar,
  Text,
} from "native-base";
import MainContainer from "../components/Containers/MainContainer";
import { colors } from "../components/colors";
const { white, primary, secondary, accent, black } = colors;
import KeyboardAvoidingContainer from "../components/Containers/KeyboardAvoidingContainer";
import RegularText from "../components/Texts/RegularText";
import TextInput from "../components/Inputs/TextInput";
import { Formik } from "formik";
import MsgBox from "../components/Texts/MsgBox";
import { SubmitButton } from "@native-base/formik-ui";
import PressabelText from "../components/Texts/PressableText";
import RowContainer from "../components/Containers/RowContainer";

const Login: FunctionComponent = () => {
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setisSuccessMessage] = useState(false);

  const handleLogin = async (credentials: any, setSubmiting: any) => {
    try {
      setMessage(" ");
      //backend
      //move to next page
      setSubmiting(false);
    } catch (error: any) {
      setMessage("Login failed" + error.message);
      setSubmiting(false);
    }
  };

  return (
    <Center backgroundColor={primary} flex={1}>
      <Container>
        <KeyboardAvoidingContainer backgroundColor={white}>
          <RegularText>Enter your accaount credentials</RegularText>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == "" || values.password == "") {
                setMessage("Please fill in all fields");
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
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
                <MsgBox success={isSuccessMessage}>{message || ""}</MsgBox>
                {!isSubmitting && (
                  <SubmitButton h={12} bg={accent} borderRadius={5} size={"lg"}>
                    <Text fontSize="md">Login</Text>
                  </SubmitButton>
                )}
                {isSubmitting && (
                  <Button
                    // disabled={true}
                    isLoading
                    h={12}
                    borderRadius={5}
                    size={"lg"}
                  >
                    <Text fontSize="md">Login</Text>
                  </Button>
                )}
                <RowContainer>
                  <PressabelText>New account Sign up</PressabelText>
                  <PressabelText>Forgot password</PressabelText>
                </RowContainer>
              </>
            )}
          </Formik>
        </KeyboardAvoidingContainer>
      </Container>
    </Center>
  );
};
export default Login;
