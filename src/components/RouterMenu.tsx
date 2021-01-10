import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Demo from "./Demo";
import Header from "./Header";
import Instructors from "./Instructors";
import NavBar from "./NavBar";
import TheBootCamp from "./TheBootCamp";
import Footer from "./Footer";
import Admin from "./Admin";
import AdminAreaProvider from "../contexts/AdminArea";
import UserContextProvider from "../contexts/UserContext";
import Login from "./Login";


export interface RouterMenuProps {}

const RouterMenu: React.FunctionComponent<RouterMenuProps> = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Header />
          <TheBootCamp />
          <Demo />
          <Instructors />
        </Route>
        <Route path = "/login">
          <UserContextProvider>
            <Login/>
          </UserContextProvider>
        </Route>
        <Route path="/admin">
          <AdminAreaProvider>
            <Admin />
          </AdminAreaProvider>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default RouterMenu;
