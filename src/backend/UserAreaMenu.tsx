import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../components/UIComponents/PrimaryButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Modal } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../contexts/CartContext";
import IconMenuOpen from "../images/menu_open.svg";
import IconMenuClose from "../images/close.svg";

const UserAreaMenu = () => {
  const { cart } = React.useContext(CartContext);
  const { logout } = useAuth0();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const [modalVisibility, setModalVisibility] = React.useState<boolean>(false);
  const onOk = () => {
    logout({ returnTo: window.location.origin });
    setModalVisibility(false);
  };

  const onCancel = () => {
    setModalVisibility(false);
  };

  return (
    <>
      <BurgerMenuContainer onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src={!menuOpen ? IconMenuOpen : IconMenuClose}
          alt="burger menu"
          width="60px"
        />
      </BurgerMenuContainer>
      <Nav theme={menuOpen.toString()}>
        <Menu>
          <MenuLeft>
            <ListItem className="home">
              <Link to="/">
                <StyledHomeOutlined />
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/courses">
                <p>Courses</p>
              </Link>
            </ListItem>
          </MenuLeft>
          <MenuRight>
            <ListItem
              className="home"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/cart">
                <CartContainer>
                  <StyledShoppingCartOutlined theme={cart} />
                  <div>{cart.length}</div>
                </CartContainer>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/account-settings">
                <p>My Account</p>
              </Link>
            </ListItem>

            <ListItem onClick={() => setModalVisibility(true)}>
              <p>Logout</p>
            </ListItem>
          </MenuRight>
        </Menu>
        <Modal
          visible={modalVisibility}
          onCancel={() => onCancel()}
          title="Warning"
          footer={<PrimaryButton onClick={() => onOk()}>Ok</PrimaryButton>}
        >
          You are about to log out.
        </Modal>
      </Nav>
    </>
  );
};

export default UserAreaMenu;

const BurgerMenuContainer = styled.div`
  display: none;
  @media screen and (max-width: 440px) {
    display: block;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
  }
`;

const Nav = styled.nav`
  width: 100vw;
  height: 70px;
  background-color: var(--black);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  @media screen and (max-width: 440px) {
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
    padding-right: 20px;
    background-color: var(--black);
    transform: ${({ theme }) =>
      theme === "true" ? "translateX(0)" : "translateX(-50%)"};
    opacity: ${({ theme }) => (theme === "true" ? "1" : "0")};
    width: ${({ theme }) => (theme === "true" ? "100vw" : "30vw")};
    transition: all 500ms ease-in-out;
    z-index: 999;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 440px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 80%;
  }
`;

const MenuRight = styled.div`
  display: flex;
  @media screen and (max-width: 440px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const MenuLeft = styled.div`
  display: flex;
  align-items: baseline;
  .home {
    background-color: var(--pink);
    margin-left: 20px;
    .anticon {
      width: 60px;
      padding: 10px 0;
      height: 100%;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  @media screen and (max-width: 440px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  margin-right: 20px;
  a {
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
  p {
    color: white;
    font-family: sans-serif;
    font-size: 1.1rem;
    margin-bottom: 0;
  }

  &:not(:first-child) {
    border-bottom: 2px transparent solid;
  }

  &:hover {
    &:not(.home) {
      border-bottom: 2px var(--pink) solid;
    }
  }
  @media screen and (max-width: 440px) {
    margin-bottom: 30px;
  }
`;

const StyledShoppingCartOutlined = styled(ShoppingCartOutlined)`
  display: inline-block;
  margin-right: 10px;
  background-color: var(--pink);
  padding: 5px;
  border-radius: 50%;
  position: relative;

  svg {
    fill: white;
    width: 20px;
    height: 20px;
  }
`;

const StyledHomeOutlined = styled(HomeOutlined)`
  display: inline-block;
  background-color: var(--pink);
  padding: 5px;
  border-radius: 50%;
  position: relative;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  div {
    position: absolute;
    top: -2px;
    right: 0;
    background-color: white;
    color: black;
    padding: 0px 4px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
  }
`;
