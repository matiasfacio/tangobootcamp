import * as React from "react";

export type UserProps = {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: UserInfo,
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>
};

export type UserInfo = {
  name: string;
  lastName: string;
  userId: string;
  email: string;
  password: string;
}

const initialState = false

export const UserContext = React.createContext({} as UserProps);

export const UserContextProvider: React.FC = (props:any) => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(initialState);
  const [userInfo, setUserInfo] = React.useState<UserInfo>({name: '', lastName: '', userId: '', email: '', password:""});

  React.useEffect(()=>{
    console.log('the user logged in/out');
  }, [loggedIn])
  

  return (
    <UserContext.Provider value={{ login: loggedIn, setLogin: setLoggedIn, userInfo: userInfo, setUserInfo: setUserInfo }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
