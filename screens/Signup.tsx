import React, { FunctionComponent, useState } from "react";
import { Button, Center, Text, VStack } from "native-base";
import { colors } from "../components/colors";
const { accent } = colors;
import KeyboardAvoidingContainer from "../components/Containers/KeyboardAvoidingContainer";
import RegularText from "../components/Texts/RegularText";
import TextInput from "../components/Inputs/TextInput";
import { Formik } from "formik";
import MsgBox from "../components/Texts/MsgBox";
import { SubmitButton } from "@native-base/formik-ui";
import PressabelText from "../components/Texts/PressableText";

const Signup: FunctionComponent = () => {
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setisSuccessMessage] = useState(false);

  const handleSignup = async (credentials: any, setSubmiting: any) => {
    try {
      setMessage(" ");
      //backend
      //move to next page
      setSubmiting(false);
    } catch (error: any) {
      setMessage("Signup failed" + error.message);
      setSubmiting(false);
    }
  };

  return (
    <VStack alignItems="center">
      <KeyboardAvoidingContainer>
        <RegularText>Enter your account credentials</RegularText>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            fullName: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (
              values.email == "" ||
              values.password == "" ||
              values.fullName == "" ||
              values.confirmPassword == ""
            ) {
              setMessage("Please fill in all fields");
              setSubmitting(false);
            } else if (values.password !== values.confirmPassword) {
              setMessage("Passwords do not match");
              setSubmitting(false);
            } else {
              handleSignup(values, setSubmitting);
            }
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <>
              <TextInput
                label="Full name"
                placeHolder="Mimi"
                onChangeText={handleChange("fullName")}
                value={values.fullName}
              />
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
                onChangeText={handleChange("password")}
                value={values.password}
                isPassword={true}
              />
              <TextInput
                label="Confirm Password"
                placeHolder="* * * * * * * *"
                onChangeText={handleChange("confirmPassword")}
                value={values.confirmPassword}
                isPassword={true}
              />
              <MsgBox success={isSuccessMessage}>{message || ""}</MsgBox>
              {!isSubmitting && (
                <SubmitButton
                  h={12}
                  bg={accent}
                  borderRadius={5}
                  size={"lg"}
                  mb={3}
                >
                  <Text fontSize="md">Signup</Text>
                </SubmitButton>
              )}
              {isSubmitting && (
                <Button
                  disabled={true}
                  isLoading
                  h={12}
                  borderRadius={5}
                  size={"lg"}
                >
                  <Text fontSize="md">Signup</Text>
                </Button>
              )}
              <Center>
                <PressabelText onPress={() => {}}>
                  Sign in to an existing account
                </PressabelText>
              </Center>
            </>
          )}
        </Formik>
      </KeyboardAvoidingContainer>
    </VStack>
  );
};
export default Signup;
