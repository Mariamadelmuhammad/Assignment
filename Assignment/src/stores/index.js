import AsyncStorage from "@react-native-async-storage/async-storage";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import reducers from "../reducers";

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: "root",
  version: 1,
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ["changetheme"],
};

const pReducer = persistReducer(persistConfig, reducers);
const middleware = applyMiddleware(thunk);
const store = legacy_createStore(pReducer, middleware);
const persistor = persistStore(store);
export { store, persistor };
