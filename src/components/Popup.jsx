import React from "react";
import styled from "styled-components";
import Label from "../components/Forms/Label";
import TextArea from "../components/Forms/TextArea";
import Button from "../components/Button";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPopup = styled.div`
  background-color: #ffffff;
  padding: 1rem 3rem;
  border-radius: 7px;
  width: 600px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Popup = ({ onConfirm }) => {
  return (
    <Wrapper>
      <StyledPopup>
        <h1>Thank you for helping out!</h1>
        <h2>Tractor repair</h2>
        <p>
          My tractor broke down and my regular mechanic is unavailable due to
          the virus. I wonder if anyone could help me? I need it before my crops
          go bad.
        </p>
        <Label>Leave a message and introduce yourself</Label>
        <TextArea style={{ width: "100%" }} />
        <Button title="Send" onClick={onConfirm} />
      </StyledPopup>
    </Wrapper>
  );
};

export default Popup;
