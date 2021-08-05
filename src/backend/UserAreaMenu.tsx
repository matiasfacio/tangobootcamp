import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../components/UIComponents/PrimaryButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useQueryUser } from "../util/useQueryUser";
import { Modal } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export const UserAreaMenu = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const { data, isSuccess } = useQueryUser(user);
  const [modalVisibility, setModalVisibility] = React.useState<boolean>(false);
  const findCourse = data?.courses?.find((course) => course.code === "001");
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
        <ListItem>
          <Link to="/">
            <PrimaryButtonBoost>
              <HomeOutlined />
            </PrimaryButtonBoost>
          </Link>
        </ListItem>
        {isAuthenticated && isSuccess && findCourse?.status === "approved" ? (
          <ListItem>
            <Link to="/courses">
              <p>Courses</p>
            </Link>
          </ListItem>
        ) : (
          <ListItem>
            <p>Buy bootcamp</p>
          </ListItem>
        )}
        <ListItem>
          <Link to="/account-settings">
            <p>Account Information</p>
          </Link>
        </ListItem>

        <ListItem onClick={() => setModalVisibility(true)}>
          <p>Logout</p>
        </ListItem>
      </Menu>
      <Modal
        visible={modalVisibility}
        onCancel={() => onCancel()}
        title="Log out"
        footer={<PrimaryButton onClick={() => onOk()}>Ok</PrimaryButton>}
      >
        You are about to log out.
      </Modal>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100vw;
  height: 50px;
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
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
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
`;

const PrimaryButtonBoost = styled(PrimaryButton)`
  font-size: 0.9rem;
`;
