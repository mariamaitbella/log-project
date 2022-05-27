import React from "react";
import { Center, View, Text } from "native-base";
import { colors } from "../colors";
const { primary, black, secondary, accent } = colors;
import SmallText from "../Texts/SmallText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RegularText from "../Texts/RegularText";
import { ScreenHeight } from "../../screens/Dashboard";

//styled components

const InfoCard = (props: any) => {
  return (
    <View
      style={{ ...props?.style }}
      flexDirection="row"
      height={ScreenHeight * 0.25}
      bg={primary}
      borderWidth="2px"
      borderColor={secondary}
      //   p={20}
      borderRadius="15px"
      mb={30}
      p={4}
    >
      <View
        width={"60%"}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <RegularText style={{ fontWeight: "bold" }}>{props.title}</RegularText>
        <RegularText style={{ fontWeight: "bold" }}>{props.value}</RegularText>
        <SmallText>{props.date}</SmallText>
      </View>
      <View
        width={"40%"}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <MaterialCommunityIcons
          name={props.icon}
          size={ScreenHeight * 0.15}
          color={accent}
        />
      </View>
    </View>
  );
};

export default InfoCard;
