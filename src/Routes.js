import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartView from "./views/Start";
import SignUpView from "./views/Signup";
import RequestHelpView from "./views/RequestHelp";
import NotificationsView from "./views/Notifications";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={StartView} />
      <Route exact path="/signup" component={SignUpView} />
      <Route exact path="/request-help" component={RequestHelpView} />
      <Route exact path="/notifications" component={NotificationsView} />
    </Router>
  );
};

export default Routes;
