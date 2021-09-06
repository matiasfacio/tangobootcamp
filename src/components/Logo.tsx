import tangobootcamps from "../images/logo-small.jpg";
// import logo from "../images/logo-tbc1.svg";
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
  top: 0;
  left: 0px;
  background-color: var(--black);
  img {
    width: 150px;
    height: 100px;
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
