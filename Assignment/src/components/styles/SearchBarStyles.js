import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants/const";

export const MainView = styled.View`
  margin: 5px;
  align-items: center;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  font-family: ${FONTS.badgetitle.fontFamily};
  font-size: ${FONTS.title.fontSize}px;
  margin-left: 10px;
  width: 80%;
`;

export const SearchView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  width: 95%;
  background-color: ${COLORS.gray4};
  border-radius: 15px;
  align-items: center;
`;
