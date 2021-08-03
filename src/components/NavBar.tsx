import * as React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import IconMenuOpen from "../images/menu_open.svg";
import IconMenuClose from "../images/close.svg";
import { useAuth0 } from "@auth0/auth0-react";

export type menuResponsiveCss = React.CSSProperties | undefined;

const NavBar: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { isAuthenticated } = useAuth0();

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

  return (
    <>
      <BurgerMenuContainer onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src={!menuOpen ? IconMenuOpen : IconMenuClose}
          alt="burger menu"
          width="60px"
        />
      </BurgerMenuContainer>
      <MenuContainer theme={menuOpen}>
        <ul>
          <HashLink to="/#">home</HashLink>
          <HashLink to="/#what-is">the bootcamp</HashLink>
          <HashLink to="/#how-does-it-work">demo</HashLink>
          <HashLink to="/#instructors">instructors</HashLink>
          <HashLink to="/#price">Price</HashLink>
          <HashLink to="/#program">Program</HashLink>
          <HashLink to="/#contact">contact</HashLink>
          {!isAuthenticated ? (
            <HashLink to="/login">Sign In</HashLink>
          ) : (
            <HashLink to="/userarea">User Area</HashLink>
          )}
        </ul>
      </MenuContainer>
    </>
  );
};

export default NavBar;

const BurgerMenuContainer = styled.div`
  display: none;
  @media screen and (max-width: 994px) {
    display: block;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
  }
`;

const MenuContainer = styled.nav`
  height: 60px;
  width: 100vw;
  background-color: var(--black);
  ul {
    list-style: none;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--white);
    a {
      padding: 10px 15px;
      border-radius: 2px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: var(--pink);
        color: black;
      }
    }
    & a:last-child {
      padding: 10px 10px;
      border-radius: 2px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      background-color: var(--pink);
      color: white;
      &:hover {
        background-color: var(--black);
      }
    }
  }
  @media screen and (max-width: 994px) {
    position: fixed;
    left: 0;
    top: 0;
    background-color: var(--black);
    transform: ${({ theme }) =>
      theme === true ? "translateX(0)" : "translateX(-50%)"};
    opacity: ${({ theme }) => (theme === true ? "1" : "0")};
    height: 100vh;
    width: ${({ theme }) => (theme === true ? "100vw" : "30vw")};
    transition: all 500ms ease-in-out;
    z-index: 999;
    ul {
      flex-direction: column;
    }
  }
`;
