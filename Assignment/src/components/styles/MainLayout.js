import React from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import { COLORS } from "../../constants/const";
import { useSelector } from "react-redux";
import { MainContainer } from "./MainContainer";

export const MainLayout = () => {
  const theme = useSelector((state) => state.changetheme.theme);

  return (
    <SafeAreaView>
      <MainContainer>
        <ScrollView>
          <StatusBar
            barStyle={theme.STATUS_BAR_STYLE}
            hidden={false}
            backgroundColor={COLORS.white}
            translucent={true}
          />
        </ScrollView>
      </MainContainer>
    </SafeAreaView>
  );
};
