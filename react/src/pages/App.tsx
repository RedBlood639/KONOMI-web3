import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { OraclePage } from "./oracle";
import configureStore from "store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={OraclePage} />
      </Router>
    </Provider>
  );
}

export default App;
