import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Post from "./Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Offer = () => {
  return (
    <div>
      <div>
        <h3>Bill Gates</h3>
        <FontAwesomeIcon icon={faStar} style={{ color: "#feca57" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#feca57" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#feca57" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#e6e6e6" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#e6e6e6" }} />
        <p>Bill Gates have offered to help with your groceries!</p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "1rem",
          }}
        >
          <Button title="Accept" />
          <Button title="Decline" theme="red" />
        </div>
      </div>
    </div>
  );
};

const HelpOffer = ({ title, body, img }) => {
  return (
    <Post>
      <Wrapper>
        <div
          className="picture-wrapper"
          style={{ backgroundImage: `url("${img}")` }}
        />
        <div className="contentWrapper">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </Wrapper>
      <Offer />
    </Post>
  );
};

export default HelpOffer;
