import { combineReducers } from "redux";
import { SWITCH_THEME } from "../actions/types";
import { lightTheme } from "../../config/theme";

const initialState = {
  theme: lightTheme,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        theme: action.theme,
      };
    default:
      return state;
  }
};

const appReducer = combineReducers({
  changetheme: themeReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
