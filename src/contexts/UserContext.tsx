import * as React from 'react';


export type UserProps = { 
    login: boolean }

export const UserContext = React.createContext({} as UserProps)

export const UserContextProvider: React.FC = (props) => {
    const [loggedIn, setLoggedIn ] = React.useState<boolean>(true)
    return (
        <UserContext.Provider value = {{login: loggedIn}}>
            {props.children}
            </UserContext.Provider>
    )
};

export default UserContextProvider;