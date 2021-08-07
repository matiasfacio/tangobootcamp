import { useAuth0 } from "@auth0/auth0-react";

export type userLogin = {
  email?: string;
  password?: string;
};

const LoginUser = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return !isAuthenticated
    ? loginWithRedirect()
    : logout({ returnTo: window.location.origin });
};

export default LoginUser;
