import * as React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import IconMenuOpen from "../../images/menu_open.svg";
import IconMenuClose from "../../images/close.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { PrimaryButton } from "./../UIComponents/PrimaryButton";
import { UserOutlined } from "@ant-design/icons";
import { Logo } from "./Logo";

export type menuResponsiveCss = React.CSSProperties | undefined;

const NavBar: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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

  const authenticateUser = () => {
    !isAuthenticated
      ? loginWithRedirect()
      : logout({ returnTo: window.location.origin });
  };

  return (
    <MainMenuContainer>
      <BurgerMenuContainer onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src={!menuOpen ? IconMenuOpen : IconMenuClose}
          alt="burger menu"
          width="60px"
        />
      </BurgerMenuContainer>

      <MenuContainer menuOpen={menuOpen}>
        <Logo />
        <ul>
          <HashLink to="/#">home</HashLink>
          <HashLink to="/#what-is">the bootcamp</HashLink>
          <HashLink to="/#instructors">instructors</HashLink>
          <HashLink to="/#price">Pricing</HashLink>
          <HashLink to="/#program">Program</HashLink>
          <HashLink to="/#contact">contact</HashLink>
        </ul>
        <RegisterUser>
          {!isAuthenticated ? (
            <PrimaryButtonBoost onClick={() => authenticateUser()}>
              Login/Register
            </PrimaryButtonBoost>
          ) : (
            <HashLink to="/userarea">
              <UserOutlined />
            </HashLink>
          )}
        </RegisterUser>
      </MenuContainer>
    </MainMenuContainer>
  );
};

export default NavBar;

const MainMenuContainer = styled.div`
  width: 100vw;
  background-color: var(--body-bg-color);
`;

const BurgerMenuContainer = styled.div`
  display: none;
  @media screen and (max-width: 1100px) {
    display: block;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
  }
`;

const MenuContainer = styled.nav<{ menuOpen: boolean }>`
  min-width: 1024px;
  max-width: 1500px;
  margin: 0 auto;
  background-color: var(--body-bg-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem;
  ul {
    list-style: none;
    height: calc(100% - 50px);
    width: 100%;
    display: flex;
    justify-content: center;
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
  }
  @media screen and (max-width: 1100px) {
    position: fixed;
    left: 0;
    top: 0;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 100%;
    background-color: var(--body-bg-color);
    transform: ${(props) =>
      props.menuOpen ? "translateX(0)" : "translateX(-100%)"};
    opacity: ${(props) => (props.menuOpen ? "1" : "0")};
    height: 100vh;
    width: 100vw;
    transition: all 500ms ease-in-out;
    z-index: 999;
    ul {
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      height: 80%;
      width: 100%;
    }
  }
`;

const RegisterUser = styled.div`
  padding: 10px 15px;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background-color: var(--pink);
  color: white;
  align-self: center;
  &:hover {
    background-color: black;
  }
`;

const PrimaryButtonBoost = styled(PrimaryButton)`
  padding: 0px 0px;
  width: fit-content;
`;
