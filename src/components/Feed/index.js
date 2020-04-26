import React from "react";
import NewsPost from "./NewsPost";
import HelpRequest from "./HelpRequest";
import { newsPosts, helpRequests } from "./dummyData";

const Feed = () => {
  return (
    <div>
      {newsPosts.map((newsPost) => {
        return <NewsPost {...newsPost} />;
      })}

      {helpRequests.map((helpRequest) => {
        return <HelpRequest {...helpRequest} />;
      })}
    </div>
  );
};

export default Feed;
