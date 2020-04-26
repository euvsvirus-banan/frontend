import React from "react";
import View from "../components/View";
import HelpOffer from "../components/HelpOffer";
import OfferedHelp from "../components/OfferedHelp";

const helpOffer = {
  title: "Help with groceries",
  body: "Bring me bacon every day at 3pm",
  img:
    "https://theblanchardchicago.com/wp-content/uploads/2020/02/Tips-To-Help-You-Save-Money-On-Your-Weekly-Food-Shop.jpg",
};

const NotificationsView = () => {
  return (
    <div>
      <View>
        <h1>Your reqeusts</h1>
        <HelpOffer {...helpOffer} />
        <OfferedHelp {...helpOffer} />
      </View>
    </div>
  );
};

export default NotificationsView;
