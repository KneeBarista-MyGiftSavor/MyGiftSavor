import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Save from "./pages/Save";

const AppMain = () => {
  return (
    //routing
    <Router>
      <Switch>
        <Route path="/save">
          <Save />
        </Route>
        {/* <Route path="/login">
          <Login />
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default AppMain;
