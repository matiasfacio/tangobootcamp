import * as React from "react";
import silouette from "../images/siluette.png";
import headerImg from "../images/header-img.svg";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "./UIComponents/SecondaryButton";
import { PrimaryButton } from "./UIComponents/PrimaryButton";

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const history = useHistory();

  return (
    <HeaderSection>
      <StyledHeader>
        <HeaderLeft>
          <h1>
            Do you <span>deeply</span> understand the Tango Structure?
          </h1>
          <h2>An online bootcamp for Argentine Tango lovers</h2>
          <div className="btn-container">
            <PrimaryButtonBoost onClick={() => history.push("/login")}>
              SIGN UP
            </PrimaryButtonBoost>
            <SecondaryButtonBoost>PROGRAM</SecondaryButtonBoost>
          </div>
        </HeaderLeft>
        <HeaderRight>
          <div id="primary-image">
            <img src={silouette} alt="siloutte" id="silouette" />
            <div id="secondary-image">
              <img src={headerImg} alt="header-img" id="header-img" />
            </div>
          </div>
        </HeaderRight>
      </StyledHeader>
    </HeaderSection>
  );
};

export default Header;

const SecondaryButtonBoost = styled(SecondaryButton)`
  display: inline-block;
  margin: 10px 10px;
  padding: 5px 10px;
`;

const PrimaryButtonBoost = styled(PrimaryButton)`
  box-shadow: 10px 10px 20px rgb(213, 213, 213);
  padding: 5px 10px;
`;

const HeaderSection = styled.section`
  margin: 0 auto;
  padding-top: 100px;
  min-height: calc(100vh - 50px);
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  padding-left: 2em;
  h1 {
    font-size: clamp(3rem, 10vw, 4rem);
    text-transform: uppercase;
    letter-spacing: -3px;
    color: var(--black);
  }
  h2 {
    font-size: 1.5rem;
    color: $h2-color;
    text-transform: capitalize;
  }
  span {
    box-shadow: 1px 1px 10px;
    background-color: rgb(247, 126, 126);
    padding: 5px;
    font-size: 4rem;
    transform: rotateZ(20deg);
  }
`;

const HeaderRight = styled.div`
  z-index: -1;
  display: none;
  #primary-image {
    position: relative;
    img#silouette {
      border-radius: 20px;
      width: 30vw;
      height: auto;
      opacity: 1;
      z-index: 1;
      animation: rotateImages 10s 5 alternate-reverse;
    }
    #secondary-image {
      position: absolute;
      z-index: -1;
      img#header-img {
        transform: translate(70%, -130%);
        opacity: 0.8;
        width: 15vw;
      }
    }
  }
  @media (min-width: 800px) {
    display: block;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
`;
