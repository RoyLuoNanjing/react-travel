import { createStore, combineReducers } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";

const rootReducer = combineReducers({
  //使用对象来进行数据传递
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
