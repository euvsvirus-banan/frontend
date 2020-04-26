import React from "react";
import View from "../components/View";
import Feed from "../components/Feed";

const StartView = () => (
  <div>
    <View>
      <h1>Recent Posts</h1>
      <Feed />
    </View>
  </div>
);

export default StartView;
