import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #1dd1a1;
  border: none;
  border-radius: 100px;
  padding: 10px 20px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  background: linear-gradient(to right, #00d2d3, #1dd1a1);

  ${(props) => {
    if (props.theme == "red") {
      return "background: linear-gradient(to right, #ff6b6b, #ee5253); margin-left: 20px;";
    }
  }}

  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.2);
  min-width: 100px;
  cursor: pointer;
  transition: box-shadow 0.1s, background 0.2s;
  :hover {
    box-shadow: none;
    background: linear-gradient(to right, #00d2d3, #00d2d3);
    ${(props) => {
      if (props.theme == "red") {
        return "background: linear-gradient(to right, #ff6b6b, #ff6b6b);";
      }
    }}
  }
`;

const Button = ({ title, onClick, theme }) => {
  return (
    <div>
      <StyledButton onClick={onClick} theme={theme}>
        {title}
      </StyledButton>
    </div>
  );
};

export default Button;
