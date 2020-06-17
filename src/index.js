import React from "react";
import ReactDOM from "react-dom";
// imports for creating and handling store
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import for creating Routes
import { BrowserRouter as Router, Route } from "react-router-dom";
// imports for reducers
import { combineReducers } from "redux";
import artReducer from "./reducers/artReducer";
// import pages for rendering routes
import ZazanilliContainer from "./containers/ZazanilliContainer";
import NiltzeContainer from "./containers/NiltzeContainer";
import AciContainer from "./containers/AciContainer";
import CochittaContainer from "./containers/CochittaContainer";

import App from "./App";

const rootReducer = combineReducers({ artCollection: artReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <App />
          <Route exact path="/" component={AciContainer} />
          <Route exact path="/niltze" component={NiltzeContainer} />
          <Route exact path="/zazanilli" component={ZazanilliContainer} />
          <Route exact path="/cochitta" component={CochittaContainer} />
        </React.Fragment>
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
