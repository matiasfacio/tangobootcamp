import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { PrimaryButton } from "./UIComponents/PrimaryButton";
import styled from "styled-components";

export type userLogin = {
  email?: string;
  password?: string;
};

const LoginUser: React.FunctionComponent = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <LoginContainer>
      <LoginHeaderContainer>
        <h2>Let's start!</h2>

        {!isAuthenticated && (
          <PrimaryButton onClick={() => loginWithRedirect()}>
            Sign in OR Create an account here!
          </PrimaryButton>
        )}
        {isAuthenticated && (
          <PrimaryButton
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </PrimaryButton>
        )}
      </LoginHeaderContainer>
    </LoginContainer>
  );
};

export default LoginUser;

const LoginHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  max-width: 400px;
  h2 {
    font-size: 3rem !important;
  }
`;

const LoginContainer = styled.section`
  padding: 0vh 2em;
  border-left: rgb(247, 126, 126) 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  h2 {
    font-weight: 600;
    font-size: 1.1rem;
    text-transform: uppercase;
    padding: 10px;
    color: #292929;
  }
`;
