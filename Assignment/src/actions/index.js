import { SWITCH_THEME } from "./types";

export const switchTheme = (theme) => {
  return (dispatch) => {
    dispatch({
      type: SWITCH_THEME,
      theme: theme,
    });
  };
};
