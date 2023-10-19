import React from "react";
import { View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { Center, Image, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Item = (props) => (
  <View
    style={{
      borderBottomWidth: 2,
      borderBottomColor: "lightgrey",
      padding: 15,
    }}
  >
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Detailed", {
          author: props.author,
          urlToImage: props.urlToImage,
          publishedAt: props.publishedAt,
          description: props.description,
        });
      }}
    >
      <Text italic bold fontSize="xl" alignSelf="center">
        {props.title}
      </Text>
      <Center>
        <Image
          source={{
            uri: props.urlToImage,
          }}
          alt="Alternate Text"
          size="xl"
          borderRadius={100}
        />
      </Center>
    </TouchableOpacity>
  </View>
);

const List = ({ searchPhrase, setClicked, data }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    if (searchPhrase === "") {
      return (
        <Item
          title={item.title}
          urlToImage={item.urlToImage}
          publishedAt={item.publishedAt}
          description={item.description}
          navigation={navigation}
        />
      );
    }
    if (
      item.title
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item title={item.title} urlToImage={item.urlToImage} />;
    }
  };

  return (
    <View
      onStartShouldSetResponder={() => {
        setClicked(false);
      }}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
      />
    </View>
  );
};

export default List;
