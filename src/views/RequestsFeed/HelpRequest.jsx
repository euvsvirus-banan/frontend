import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Post from "../../components/Post";
import Popup from "../../components/Popup";

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

const HelpRequest = ({ title, body, img }) => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <Post>
      <Wrapper>
        <div
          className="picture-wrapper"
          style={{ backgroundImage: `url("${img}")` }}
        />
        <div className="contentWrapper">
          <h2>{title}</h2>
          <h3>{new Date().toDateString()}</h3>
          <p>{body}</p>
          <Button
            title="Offer help"
            onClick={(event) => {
              console.log(event);
              setOpenPopup(true);
            }}
          />
        </div>
      </Wrapper>
      {openPopup ? (
        <Popup
          onConfirm={() => {
            setOpenPopup(false);
          }}
        />
      ) : null}
    </Post>
  );
};

export default HelpRequest;
