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

  React.useEffect(() => {
    const handleClick = () => setMenuOpen(false);
    const allLinksInMenu = document.querySelectorAll("nav ul a");
    if (menuOpen) {
      allLinksInMenu.forEach((a) => {
        a.addEventListener("click", (e) => handleClick());
      });
    }

    return allLinksInMenu.forEach((a) => {
      a.removeEventListener("click", handleClick);
    });
    
  }, [menuOpen]);

  const menuResponsiveStyle: menuResponsiveCss = {
    backgroundColor: "rgb(60, 107, 107)",
    color: menuOpen ? "white" : "rgb(60, 107, 107)",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: menuOpen ? "0" : "-100vw",
    height: "100vh",
    transition: "all 0.5s ease-in-out",
  };

  const menuResponsiveStyleUL: menuResponsiveCss = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: "10px",
  };

  return (
    <div id="menu-wrapper">
      {smallDevices && (
        <div
          id="menu-wrapper-symbol"
          onClick={() => setMenuOpen(!menuOpen)}
        ></div>
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
