import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../components/UIComponents/PrimaryButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Modal } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../contexts/CartContext";

export const UserAreaMenu = () => {
  const { cart } = React.useContext(CartContext);
  const { logout } = useAuth0();
  const [modalVisibility, setModalVisibility] = React.useState<boolean>(false);
  const onOk = () => {
    logout({ returnTo: window.location.origin });
    setModalVisibility(false);
  };

  const onCancel = () => {
    setModalVisibility(false);
  };

  return (
    <Nav>
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
  );
};

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

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const MenuRight = styled.div`
  display: flex;
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
