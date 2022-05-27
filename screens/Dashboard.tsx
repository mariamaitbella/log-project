import React, { useState } from "react";
import { View } from "native-base";
import MainContainer from "../components/Containers/MainContainer";
import BigText from "../components/Texts/BigText";
import { colors } from "../components/colors";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
import InfoCard from "../components/Cards/InfoCard";

export const StatusBarHeight = Constants.statusBarHeight;
export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;

const { white, primary, secondary, accent, black, darkGray } = colors;

const TopBg = () => {
  return (
    <View
      bg={darkGray}
      height={ScreenHeight * 0.28}
      width={ScreenWidth}
      borderRadius="40px"
      position={"absolute"}
      top={-30}
    ></View>
  );
};

const Dashboard = () => {
  return (
    <>
      <MainContainer style={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}>
        <TopBg />
        <MainContainer bg="transparent">
          <BigText mb="25">Hello, Mimi!</BigText>
          <InfoCard
            icon="chart-timeline-variant"
            title="Balance"
            value="13,288.84"
            date="23/05/2022"
          />
          <InfoCard
            icon="chart-arc"
            title="Savings"
            value="3,300.63"
            date="Last 6 months"
          />
        </MainContainer>
      </MainContainer>
    </>
  );
};

export default Dashboard;
