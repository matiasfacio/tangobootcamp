import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Demo from "./Demo";
import Header from "./Header";
import Instructors from "./Instructors";
import NavBar from "./NavBar";
import TheBootCamp from "./TheBootCamp";
import Footer from "./Footer";
import LoginRegister from "./LoginRegister";
import Admin from "./Admin";
import AdminAreaProvider from "../contexts/AdminArea";
import UserArea from "./UserArea";
import UserContextProvider from "../contexts/UserContext";

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
        <Route path="/login" component={LoginRegister} />
        <Route path="/admin">
          <AdminAreaProvider>
            <Admin />
          </AdminAreaProvider>
        </Route>
        <Route path="/userarea">
          <UserContextProvider>
            <UserArea />
          </UserContextProvider>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default RouterMenu;
