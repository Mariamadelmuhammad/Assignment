import React, { createRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import { NativeBaseProvider } from "native-base";
import { GuestNavigator } from "./navigation/GuestNavigator";
import useCachedResources from "./src/utils/useCachedResources";
import { store, persistor } from "./src/stores";
import { PersistGate } from "redux-persist/integration/react";
import { MainLayout } from "./src/components/styles/MainLayout";
import { MainContainer } from "./src/components/styles/MainContainer";
import { ThemeProvider } from "styled-components";

const AppWrapper = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
};

const App = () => {
  const navigationRef = createRef();
  const nav = () => navigationRef.current;
  const theme = useSelector((state) => state.changetheme.theme);

  return (
    <MainContainer>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <ThemeProvider theme={theme}>
            <NativeBaseProvider>
              <MainLayout />
              <GuestNavigator nav={nav} />
            </NativeBaseProvider>
          </ThemeProvider>
        </NavigationContainer>
      </PersistGate>
    </MainContainer>
  );
};

export default AppWrapper;
