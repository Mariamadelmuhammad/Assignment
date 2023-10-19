import React from "react";
import { MainView } from "../components/styles/DetailsStyles";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  ScrollView,
} from "native-base";
import Icons from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const DetailedScreen = ({ route }) => {
  const { author, urlToImage, publishedAt, content, description } =
    route.params;
  const navigation = useNavigation();

  return (
    <MainView>
      <ScrollView>
        <Icons
          name="caretleft"
          color="black"
          size={25}
          style={{ padding: 20 }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <Center
          _text={{
            color: "red.500",
            fontWeight: "700",
            fontSize: "2xl",
          }}
        >
          Details
        </Center>
        <Box alignItems="center">
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
          >
            <Box paddingTop={10}>
              <AspectRatio w="100%" ratio={10 / 10}>
                <Image
                  source={{
                    uri: urlToImage,
                  }}
                  alt="image"
                  rounded={40}
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="sm" ml="-1">
                  <Text>Authors : {JSON.stringify(author)}</Text>
                </Heading>
                <Text
                  fontSize="xl"
                  _light={{
                    color: "violet.500",
                  }}
                  _dark={{
                    color: "violet.400",
                  }}
                  fontWeight="800"
                  ml="-0.5"
                  mt="-1"
                >
                  Description :{JSON.stringify(description)}
                </Text>
              </Stack>

              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.100",
                    }}
                    fontWeight="400"
                  >
                    Published At :{JSON.stringify(publishedAt)}
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Box>
      </ScrollView>
    </MainView>
  );
};

export default DetailedScreen;
