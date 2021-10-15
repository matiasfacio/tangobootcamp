import * as React from "react";
import silouette from "../../images/siluette.png";
import headerImg from "../../images/header-img.svg";
import styled from "styled-components";
import { SecondaryButton } from "../UIComponents/SecondaryButton";
import { PrimaryButton } from "../UIComponents/PrimaryButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const history = useHistory();

  const authenticateUser = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      history.push("/userarea");
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HeaderSection>
      <StyledHeader>
        <HeaderLeft>
          <h1>
            Do you <span>deeply</span> understand the Tango Structure?
          </h1>
          <h2>An online bootcamp for Argentine Tango lovers</h2>
          <div className="btn-container">
            <PrimaryButtonBoost onClick={() => authenticateUser()}>
              SIGN UP
            </PrimaryButtonBoost>
            <SecondaryButtonBoost onClick={() => authenticateUser()}>
              FREE CONTENT
            </SecondaryButtonBoost>
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
  box-shadow: 10px 10px 20px rgb(0, 0, 0);
  padding: 5px 10px;
`;

const HeaderSection = styled.section`
  margin: 0 auto;
  min-height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--body-bg-color);
  @media screen and (max-width: 994px) {
    padding-top: 100px;
    min-height: 100vh;
  }
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
    color: var(--white);
  }
  h2 {
    font-size: 1.5rem;
    color: var(--white);
    text-transform: capitalize;
  }
  span {
    box-shadow: 10px 10px 10px black;
    color: white;
    background-color: var(--pink);
    padding: 1px 10px;
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
    }
    #secondary-image {
      position: absolute;
      z-index: -1;
      img#header-img {
        transform: translate(50%, -130%);
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
