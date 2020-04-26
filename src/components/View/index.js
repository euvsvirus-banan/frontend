import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "../Search";
import Notification from "../Notification";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 40px auto;
`;

const Header = styled.header`
  display: flex;
  padding: 1rem 3rem;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
  align-items: center;
  background-color: #fff;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 300;
  color: #000000;
`;

const Links = styled.div`
  margin-left: auto;
  margin-right: 30px;
  display: flex;
  align-items: center;

  .link {
    text-decoration: none;
    color: #000000;
    margin: 0 10px;
  }
  .link:hover {
    text-decoration: none;
    color: #2e86de;
  }
`;

const View = ({ children }) => {
  return (
    <div>
      <Header>
        <TitleLink to={"/"} className="header-title">
          Glocalize
        </TitleLink>

        <Links>
          <Search />
          <Link className="link" to={"/request-help"}>
            I would like help
          </Link>
          <Link className="link" to={"/signup"}>
            Sign up
          </Link>
        </Links>

        <Notification />
      </Header>
      <Main>{children}</Main>
    </div>
  );
};

export default View;
