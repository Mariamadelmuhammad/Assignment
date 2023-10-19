import { COLORS, FONTS, SIZES } from "../src/constants/const";

export const darkTheme = {
  mode: "dark",
  PRIMARY_BACKGROUND_COLOR: "#212121",
  PRIMARY_TEXT_COLOR: "#ffffff",
  STATUS_BAR_STYLE: "red",
  COLORS: { ...COLORS },
  FONTS: { ...FONTS },
  SIZES: { ...SIZES },
};
export const lightTheme = {
  mode: "light",
  PRIMARY_BACKGROUND_COLOR: "#ffffff",
  PRIMARY_TEXT_COLOR: "#212121",
  STATUS_BAR_STYLE: "dark-content",
  COLORS: { ...COLORS },
  FONTS: { ...FONTS },
  SIZES: { ...SIZES },
};
