import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          rubikmedium: require("../../assets/fonts/Rubik-Medium.ttf"),
          rubikregular: require("../../assets/fonts/Rubik-Regular.ttf"),
        });
        setLoadingComplete(true);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
        setLoadingComplete(false);
      } finally {
        // setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
