import React, { useEffect, useState, useCallback } from "react";
import {
  ActivityIndicator,
  View,
  RefreshControl,
  SafeAreaView,
  LogBox,
} from "react-native";
import { Heading } from "native-base";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import { ScrollView } from "react-native-virtualized-view";

const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    setTimeout(() => {
      setRefreshing(false);
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs([
      "Unable to resolve host",
      "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
    ]);
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=7a04750909ab41a0a79602ec3b2b1b6f"
      );
      const json = await response.json();
      setData(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <View style={{ padding: 20, paddingTop: 35, alignItems: "center" }}>
        {isLoading ? (
          <ActivityIndicator size={50} style={{ flex: 1, padding: 24 }} />
        ) : (
          <>
            {!clicked && (
              <Heading size="xl" color="red.500" underline>
                BREAKING NEWS
              </Heading>
            )}
            <SearchBar
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              clicked={clicked}
              setClicked={setClicked}
            />
            {
              <List
                searchPhrase={searchPhrase}
                data={data}
                setClicked={setClicked}
              />
            }
          </>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
