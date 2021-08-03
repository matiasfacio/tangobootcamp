import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { PrimaryButton } from "../components/UIComponents/PrimaryButton";
import { AccountInformation } from "../backend/AccountInformation";
import { useQueryUser } from "../util/useQueryUser";
import { Backend } from "../backend/Backend";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export const UserArea = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuth0();
  const { data, isSuccess } = useQueryUser(user);
  const findCourse = data?.courses?.find((course) => course.code === "001");
  const [showAccountSettings, setShowAccountSettings] =
    React.useState<boolean>(false);
  const [showCourse, setShowCourse] = React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(true);
  const history = useHistory();

  if (isLoading) {
    return <h2>Logging in </h2>;
  }

  return (
    <>
      {!isAuthenticated && history.push("/login")}
      <FullBackendScreen>
        <MenuBar />
        {showMenu && (
          <Menu theme={showMenu}>
            {isAuthenticated &&
            isSuccess &&
            findCourse?.status === "approved" ? (
              <ListItem>
                <PrimaryButtonBoost
                  onClick={() => {
                    !showCourse && setShowCourse(!showCourse);
                    setShowAccountSettings(false);
                  }}
                >
                  My Course
                </PrimaryButtonBoost>
              </ListItem>
            ) : (
              <ListItem>
                <PrimaryButtonBoost onClick={() => console.log("buy bootcamp")}>
                  Buy Bootcamp
                </PrimaryButtonBoost>
              </ListItem>
            )}
            <ListItem>
              <PrimaryButtonBoost
                onClick={() => {
                  setShowAccountSettings(!showAccountSettings);
                  setShowCourse(false);
                }}
              >
                Account Information
              </PrimaryButtonBoost>
            </ListItem>
            <ListItem>
              <Link to="/">
                <PrimaryButtonBoost>Home</PrimaryButtonBoost>
              </Link>
            </ListItem>
            <ListItem>
              <PrimaryButtonBoost
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </PrimaryButtonBoost>
            </ListItem>
          </Menu>
        )}
        <PrimaryButtonMenu onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <>
              <MenuFoldOutlined style={{ marginRight: 20 }} />
              Close Menu
            </>
          ) : (
            <>
              <MenuUnfoldOutlined style={{ marginRight: 20 }} />
              Open Menu
            </>
          )}
        </PrimaryButtonMenu>

        {showAccountSettings && <AccountInformation />}
        {showCourse && <Backend />}
      </FullBackendScreen>
    </>
  );
};

export default UserArea;

const FullBackendScreen = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0em;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 0 10px;
  cursor: pointer;
  margin: 5px 0;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: var(--black);
  height: 100vh;
  top: 50px;
  left: 0;
  z-index: 1000;
  transform: ${(props) =>
    props.theme ? "translateX(0)" : "translateX(-100vw)"};

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const PrimaryButtonBoost = styled(PrimaryButton)`
  width: 100px;
  height: 100px;
  font-size: 0.9rem;
`;

const PrimaryButtonMenu = styled(PrimaryButton)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 5px 10px;
`;

const MenuBar = styled.div`
  grid-area: MenuBar;
  width: 100%;
  height: 50px;
  background-color: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center;
  padding: 3px;
  font-size: 1.5rem;
  border-bottom: 0.01rem gray solid;
`;
