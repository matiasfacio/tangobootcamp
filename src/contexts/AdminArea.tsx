import * as React from "react";

export interface AdminProp {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const AdminArea = React.createContext({} as AdminProp)

export const AdmiAreaProvider = (props:any) => {
    const [loginSuccessful, setLoginSucessful] = React.useState<boolean>(false)

  return (
    <AdminArea.Provider value = {{login: loginSuccessful, setLogin: setLoginSucessful}}>
      {props.children}
    </AdminArea.Provider>
  );
};
;
export default AdmiAreaProvider;
