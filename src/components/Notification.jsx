import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;

  .bell {
    font-size: 1.4rem;
    color: #22222288;
    :hover {
      color: #2e86de;
    }
  }
  .dot {
    font-size: 8px;
    position: absolute;
    top 2px;
    left: 11px;
    color: #ff6b6b;
  }
`;

const Notification = () => {
  return (
    <Wrapper>
      <Link to={"/notifications"}>
        <FontAwesomeIcon className="bell" icon={faBell} />
      </Link>
      <FontAwesomeIcon className="dot" icon={faCircle} />
    </Wrapper>
  );
};

export default Notification;
