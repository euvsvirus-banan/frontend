import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Post from "./Post";

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;

  .picture-wrapper {
    width: 200px;
    height: 200px;
    border-radius: 200px;
    background-image: url("https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s810/3_Beautiful-girl-with-a-gentle-smile.jpg");
    background-position: center;
    background-size: cover;
  }

  .contentWrapper {
    padding-left: 40px;
    max-width: calc(100% - 200px);
  }
`;

const OfferedHelp = ({ title, body, img }) => {
  return (
    <Post>
      <Wrapper>
        <div
          className="picture-wrapper"
          style={{ backgroundImage: `url("${img}")` }}
        />
        <div className="contentWrapper">
          <h2>Your offer to help has been accepted</h2>
          <h3>Name: John Doe</h3>
          <h3>Address: Foo Avenue 3</h3>
          <h3>Email: foo.bar@example.com</h3>
        </div>
      </Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <Button title="Completed" />
        <Button title="Cancel" theme="red" />
      </div>
    </Post>
  );
};

export default OfferedHelp;
