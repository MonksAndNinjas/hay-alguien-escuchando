import React from "react";
import ReactDOM from "react-dom";
// import for creating Routes
import { BrowserRouter as Router, Route } from "react-router-dom";
// import pages for rendering routes
import ZazanilliContainer from "./containers/ZazanilliContainer";
import NiltzeContainer from "./containers/NiltzeContainer";
import AciContainer from "./containers/AciContainer";
import CochittaContainer from "./containers/CochittaContainer";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
      <Route exact path="/" component={AciContainer} />
      <Route exact path="/niltze" component={NiltzeContainer} />
      <Route exact path="/zazanilli" component={ZazanilliContainer} />
      <Route exact path="/cochitta" component={CochittaContainer} />
    </Router>
  </React.StrictMode>,
  rootElement
);
