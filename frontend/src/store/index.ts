import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import TransferReducer from "./trasfer/reducers";

const rootReducer = combineReducers({
  trasfer: TransferReducer,
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
