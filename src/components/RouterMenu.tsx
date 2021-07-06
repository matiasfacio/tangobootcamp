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
import Contact from "./Contact";
import LifeLongAccess from "./LifeLongAccess";

export interface RouterMenuProps {}

const RouterMenu: React.FunctionComponent<RouterMenuProps> = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <AdminAreaProvider>
          <UserContextProvider>
            <Route path="/" exact>
              <Header />
              <TheBootCamp />
              <LifeLongAccess/>
              <Demo />
              <Instructors />
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            {/* <Route path="/contact">
              <Contact />
            </Route> */}
          </UserContextProvider>
        </AdminAreaProvider>
      </Switch>
      <Footer />
    </div>
  );
};

export default RouterMenu;
