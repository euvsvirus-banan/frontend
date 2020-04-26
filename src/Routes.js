import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUpView from "./views/Signup";
import RequestHelpView from "./views/RequestHelp";
import NotificationsView from "./views/Notifications";
import NewsFeedView from "./views/NewsFeed";
import RequestsFeed from "./views/RequestsFeed";
import ExpandedNewsPostView from "./views/ExpandedNewsPost";
import ServiceFormView from "./views/ServiceForm";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={RequestsFeed} />
      <Route exact path="/signup" component={SignUpView} />
      <Route exact path="/request-help" component={RequestHelpView} />
      <Route exact path="/notifications" component={NotificationsView} />
      <Route exact path="/feed/news" component={NewsFeedView} />
      <Route exact path="/feed/requests" component={RequestsFeed} />
      <Route exact path="/news/:id" component={ExpandedNewsPostView} />
      <Route exact path="/services" component={ServiceFormView} />
    </Router>
  );
};

export default Routes;
