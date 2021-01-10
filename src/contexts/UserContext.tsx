import * as React from "react";

export type UserProps = {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState = false

export const UserContext = React.createContext({} as UserProps);

export const UserContextProvider: React.FC = (props:any) => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(initialState);
  return (
    <UserContext.Provider value={{ login: loggedIn, setLogin: setLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
