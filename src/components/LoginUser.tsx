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
    <div className="login_container">
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
    </div>
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
