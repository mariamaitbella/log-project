import React, { FunctionComponent, useState } from "react";
import { Button, Center, Modal, Text } from "native-base";
import { Dimensions } from "react-native";
import { colors } from "../components/colors";
const { accent } = colors;
import KeyboardAvoidingContainer from "../components/Containers/KeyboardAvoidingContainer";
import RegularText from "../components/Texts/RegularText";
import TextInput from "../components/Inputs/TextInput";
import { Formik } from "formik";
import MsgBox from "../components/Texts/MsgBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import MainContainer from "../components/Containers/MainContainer";
import { MaterialIcons } from "@expo/vector-icons";
const windowHeight = Dimensions.get("window").height;

const ResetPassword: FunctionComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const [message, setMessage] = useState("");
  const [isSuccessMessage, setisSuccessMessage] = useState(false);

  const handleOnSubmit = async (credentials: any, setSubmiting: any) => {
    try {
      setMessage(" ");
      //backend
      //move to next page
      setSubmiting(false);
      //   setSubmiting(true); normally
    } catch (error: any) {
      setMessage("Request failed" + error.message);
      setSubmiting(false);
    }
  };
  // <MaterialCommunityIcons name="lock-open-outline" size={24} color="black" />
  return (
    <>
      <MainContainer>
        <Center>
          <MaterialIcons name="vpn-key" size={150} color={accent} />
          <RegularText>Provide details</RegularText>
        </Center>

        <Formik
          initialValues={{ newPassword: "", confirmNewPassword: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.newPassword == "" || values.confirmNewPassword == "") {
              setMessage("Please fill in all fields");
              setSubmitting(false);
            } else if (values.newPassword !== values.confirmNewPassword) {
              setMessage("Passwords do not match");
              setSubmitting(false);
            } else {
              handleOnSubmit(values, setSubmitting);
              setShowModal(true);
            }
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <>
              <TextInput
                label="New Password"
                placeHolder="* * * * * * * *"
                onChangeText={handleChange("newPassword")}
                value={values.newPassword}
                isPassword={true}
              />
              <TextInput
                label="Confirm New Password"
                placeHolder="* * * * * * * *"
                onChangeText={handleChange("confirmNewPassword")}
                value={values.confirmNewPassword}
                isPassword={true}
              />

              <MsgBox success={isSuccessMessage}>{message || ""}</MsgBox>
              {!isSubmitting && (
                <Button
                  onPress={() => handleSubmit()}
                  h={12}
                  bg={accent}
                  borderRadius={5}
                  size={"lg"}
                >
                  <Text fontSize="md">Submit</Text>
                </Button>
              )}
              {isSubmitting && (
                <Button
                  // disabled={true}
                  isLoading
                  h={12}
                  borderRadius={5}
                  size={"lg"}
                >
                  <Text fontSize="md">Submit</Text>
                </Button>
              )}
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content
                  height={windowHeight * 0.35}
                  maxHeight={windowHeight}
                >
                  <Modal.CloseButton />
                  <Modal.Body>
                    <Center>
                      <Text fontSize="3xl">All Good!</Text>{" "}
                      <Text fontSize="lg">Your password has been reset!</Text>
                    </Center>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group variant="ghost" space={2}>
                      <Button
                        onPress={() => {
                          setShowModal(false);
                        }}
                      >
                        PROCEED
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </>
          )}
        </Formik>
      </MainContainer>
    </>
  );
};
export default ResetPassword;
