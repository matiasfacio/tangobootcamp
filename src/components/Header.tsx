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
    <section id="header-section">
      <header>
        <div className="header-left">
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
        </div>
        <div className="header-right">
          <div id="primary-image">
            <img src={silouette} alt="siloutte" id="silouette" />
            <div id="secondary-image">
              <img src={headerImg} alt="header-img" id="header-img" />
            </div>
          </div>
        </div>
      </header>
    </section>
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
