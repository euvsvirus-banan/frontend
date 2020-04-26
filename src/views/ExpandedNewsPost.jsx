import React from "react";
import View from "../components/View";
import Post from "../components/Post";

const ExpandedNewsPostView = () => {
  return (
    <View>
      <Post>
        <h1>Tests available at your community health center</h1>
        <h3>{new Date().toDateString()}</h3>
        <p>
          Virus tests are available at your community health center, Mon-Fri 9am
          - 5pm.
        </p>
        <p>At this point we test people with the following proffessions:</p>
        <ul>
          <li>Nurses, Doctors, health care personell</li>
          <li>Police officers</li>
          <li>Firefighters</li>
        </ul>
        <p>
          You can request a time for taking the test on our{" "}
          <a href="">website</a>.
        </p>
      </Post>
    </View>
  );
};

export default ExpandedNewsPostView;
