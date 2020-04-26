import React from "react";
import View from "../../components/View";
import HelpRequest from "./HelpRequest";
import { helpRequests } from "./dummyData";
import { newsPosts } from "../NewsFeed/dummyData";
import NewsPost from "../NewsFeed/NewsPost";

const RequestsFeedView = () => (
  <div>
    <View>
      {newsPosts.map((newsPost) => (
        <NewsPost {...newsPost} />
      ))}
      <h1>Help needed in your vicinity</h1>
      {helpRequests.map((helpRequest) => (
        <HelpRequest {...helpRequest} />
      ))}
    </View>
  </div>
);

export default RequestsFeedView;
