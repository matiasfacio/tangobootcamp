import * as React from "react";
import { HashLink } from "react-router-hash-link";

export type menuResponsiveCss = React.CSSProperties | undefined;

const NavBar: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [smallDevices, setSmallDevices] = React.useState(false);

  React.useEffect(() => {
    const MediaQueryList = window.matchMedia("(max-width: 994px)");

    if (MediaQueryList.matches) {
      setSmallDevices(true);
    } else {
      setSmallDevices(false);
    }

    MediaQueryList.addListener(() => {
      if (MediaQueryList.matches) {
        setSmallDevices(true);
      } else {
        setSmallDevices(false);
      }
    });
  }, []);

  const menuResponsiveStyle: menuResponsiveCss = {
    backgroundColor: "rgb(60, 107, 107)",
    color: menuOpen ? "white" : "rgb(60, 107, 107)",
    width: "60vw",
    position: "fixed",
    top: 0,
    left: menuOpen ? "0" : "-70vw",
    height: "100vh",
    transition: "all 0.5s ease-in-out",
  };

  const menuResponsiveStyleUL: menuResponsiveCss = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    boxShadow: "10px 10px 20px black",
    paddingRight: '10px'
  };

  return (
    <div id="menu-wrapper">
      {smallDevices && (
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "<<<" : ">>>"}
        </button>
      )}
      <nav style={smallDevices ? menuResponsiveStyle : {}}>
        <ul style={smallDevices ? menuResponsiveStyleUL : {}}>
          <HashLink to="/#">home</HashLink>
          <HashLink to="/#what-is">the bootcamp</HashLink>
          <HashLink to="/#section-sample">demo</HashLink>
          <HashLink to="/#instructors">instructors</HashLink>
          <HashLink to="/">Pricing</HashLink>
          <HashLink to="/#vision">vision</HashLink>
          <HashLink to="/#contact">contact</HashLink>
          <HashLink to="/login">Login / Register</HashLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
