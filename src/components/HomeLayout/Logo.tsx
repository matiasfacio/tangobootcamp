import tangobootcamps from "../../images/newlogo-long.svg";
import React from "react";
import styled from "styled-components";

export const Logo = () => {
  return (
    <LogoContainer>
      <img src={tangobootcamps} alt="tangobootcamps" />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 20px;
  background-color: var(--body-bg-color);
  height: 87px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 994px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }
`;
