import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export type UserProps = {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
};

export type UserInfo = {
  name?: string;
  lastName?: string;
  email?: string;
  phone?: string;
};

const initialState = false;

export const UserContext = React.createContext({} as UserProps);

export const UserContextProvider: React.FC = (props: any) => {
  const { isAuthenticated, user } = useAuth0();
  const [loggedIn, setLoggedIn] = React.useState<boolean>(initialState);
  const [userInfo, setUserInfo] = React.useState<UserInfo>(
    isAuthenticated
      ? {
          name: user.given_name,
          lastName: user.family_name,
          email: user.email,
          phone: user.phone_number,
        }
      : { name: "", lastName: "", email: "", phone: "" }
  );

  return (
    <UserContext.Provider
      value={{
        login: loggedIn,
        setLogin: setLoggedIn,
        userInfo: userInfo,
        setUserInfo: setUserInfo,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
