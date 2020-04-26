import React from "react";
import styled from "styled-components";

const StyledPost = styled.div`
  border-radius: 7px;
  padding: 1rem;
  margin: 10px 0;
  box-shadow: 1px 1px 0 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Post = ({ children }) => {
  return <StyledPost>{children}</StyledPost>;
};

export default Post;
