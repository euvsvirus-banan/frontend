import React from "react";
import styled from "styled-components";
import Button from "./Button";

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
    margin-left: 40px;
  }
`;

const Request = () => {
  return (
    <Wrapper>
      <div className="picture-wrapper" />
      <div className="contentWrapper">
        <h2>Need help with groceries</h2>
        <div>x x x x x</div>
        <p>Bring me bacon every day att 5:03pm</p>
        <Button title="Offer help" />
      </div>
    </Wrapper>
  );
};

export default Request;
