import * as React from "react";
import silouette from "../images/siluette.png";
import headerImg from "../images/header-img.svg";
import { useHistory } from "react-router-dom";

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
            <button id="btn-register" onClick={() => history.push("/login")}>
              SIGN UP
            </button>
            <button id="btn-program">CHECK OUR PROGRAM</button>
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
