import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import CardReducer from "./card/reducers";

const rootReducer = combineReducers({
  CardData: CardReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = (): any => {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
};

export default configureStore;
