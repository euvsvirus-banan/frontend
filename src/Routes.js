import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartView from "./views/Start";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={StartView} />
    </Router>
  );
};

export default Routes;
