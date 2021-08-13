import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Save from "./pages/Save";

const AppMain = () => {
  return (
    <Router>
      <Switch>
        <Route path="/save">
          <Save />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default AppMain;
