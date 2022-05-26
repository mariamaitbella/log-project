import React, { FunctionComponent, useState } from "react";
import { Button, Center, Container, Icon, Input, Text } from "native-base";
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
import Ionicons from "@expo/vector-icons/Ionicons";
import { Header } from "react-native/Libraries/NewAppScreen";

const ForgotPassword: FunctionComponent = () => {
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setisSuccessMessage] = useState(false);

  const handleOnSubmit = async (credentials: any, setSubmiting: any) => {
    try {
      setMessage(" ");
      //backend
      //move to next page
      setSubmiting(false);
    } catch (error: any) {
      setMessage("Request failed" + error.message);
      setSubmiting(false);
    }
  };
  // <MaterialCommunityIcons name="lock-open-outline" size={24} color="black" />
  return (
    <>
      <Ionicons name="key" size={150} color={accent} />
      <KeyboardAvoidingContainer>
        <Center mt={4}>
          <RegularText>Provide details</RegularText>
        </Center>

        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.email == "") {
              setMessage("Please fill in all fields");
              setSubmitting(false);
            } else {
              handleOnSubmit(values, setSubmitting);
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

              <MsgBox success={isSuccessMessage}>{message || ""}</MsgBox>
              {!isSubmitting && (
                <SubmitButton h={12} bg={accent} borderRadius={5} size={"lg"}>
                  <Text fontSize="md">Submit</Text>
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
                  <Text fontSize="md">ForgotPassword</Text>
                </Button>
              )}
              <PressabelText
                onPress={() => {
                  //send link of verification to the email
                }}
              >
                Resend verification link
              </PressabelText>
            </>
          )}
        </Formik>
      </KeyboardAvoidingContainer>
    </>
  );
};
export default ForgotPassword;
