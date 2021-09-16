import * as React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Courses } from "./Courses";

export const UserArea = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();

  if (isLoading) {
    return <h2>Logging in </h2>;
  }

  return (
    <>
      {!isAuthenticated && history.push("/login")}
      <FullBackendScreen>
        <Courses />
      </FullBackendScreen>
    </>
  );
};

const FullBackendScreen = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0em;
`;
