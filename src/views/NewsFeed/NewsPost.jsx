import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  box-shadow: 1px 1px 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-decoration: none;

  .news {
    background-color: #ff9f43;
    padding: 0.5rem 1rem;
    font-weight: 800;
    color: #ffffff;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .title {
    background-color: #ffffff;
    padding: 0.5rem 1rem;
    flex: 1;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    font-weight: 500;
    color: #000000;
  }
`;

const NewsPost = ({ title, id }) => {
  return (
    <Wrapper to={`/news/${id}`}>
      <span className="news">LOCAL NEWS</span>
      <span className="title">{title}</span>
    </Wrapper>
  );
};

export default NewsPost;
