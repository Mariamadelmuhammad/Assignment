import React from "react";
import { Keyboard, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import Icon from "react-native-vector-icons/Ionicons";
import {
  MainView,
  TextInput,
  SearchView,
} from "../components/styles/SearchBarStyles";
const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  const theme = useTheme();
  return (
    <MainView>
      <SearchView>
        <Icon name="search-outline" size={30} color={theme.COLORS.gray} />
        <TextInput
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <TouchableOpacity>
            <Icon
              name="close"
              size={30}
              color={theme.COLORS.gray}
              onPress={() => {
                setSearchPhrase("");
                Keyboard.dismiss();
                setClicked(false);
              }}
            />
          </TouchableOpacity>
        )}
      </SearchView>
    </MainView>
  );
};
export default SearchBar;
