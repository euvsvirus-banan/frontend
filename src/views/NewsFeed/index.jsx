import React from "react";
import View from "../../components/View";
import NewsPost from "./NewsPost";
import { newsPosts } from "./dummyData";

const NewsFeedView = () => (
  <div>
    <View>
      <h1>Important news for your area</h1>
      {newsPosts.map((newsPost) => (
        <NewsPost {...newsPost} />
      ))}
    </View>
  </div>
);

export default NewsFeedView;
