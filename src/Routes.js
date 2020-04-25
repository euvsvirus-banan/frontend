import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartView from "./views/Start";
import SignUpView from "./views/AddUser";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={StartView} />
      <Route exact path="/signup" component={SignUpView} />
    </Router>
  );
};

export default Routes;
