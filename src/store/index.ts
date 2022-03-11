import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import ExampleReducer from "./example/reducers";

const rootReducer = combineReducers({
  example: ExampleReducer,
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
