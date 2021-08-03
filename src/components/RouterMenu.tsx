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
import { Backend } from "../backend/Backend";
import UserArea from "./UserArea";
import ArrowPullDown from "./UIComponents/ArrowPullDown";
import { useAuth0 } from "@auth0/auth0-react";
import { AccountInformation } from "../backend/AccountInformation";
import { Pricing } from "./Pricing";
import { WhyThisBootcamp } from "./WhyThisBootcamp";

export interface RouterMenuProps {}

const RouterMenu: React.FunctionComponent<RouterMenuProps> = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Switch>
        <AdminAreaProvider>
          <UserContextProvider>
            <Route path="/" exact>
              <NavBar />
              <Header />
              <TheBootCamp />
              <WhyThisBootcamp />
              <LifeLongAccess />
              <Demo />
              <Instructors />
              <Pricing />
              <Contact />
              <Footer />
              <ArrowPullDown />
            </Route>
            <Route path="/login">
              <NavBar />
              <Login />
              <Footer />
            </Route>
            <Route path="/admin">
              <NavBar />
              <Admin />
              <Footer />
            </Route>
            {isAuthenticated && (
              <>
                <Route path="/course">
                  <Backend />
                </Route>
                <Route path="/userarea">
                  <UserArea />
                </Route>
                <Route path="/account-settings">
                  <AccountInformation />
                </Route>
              </>
            )}
          </UserContextProvider>
        </AdminAreaProvider>
      </Switch>
    </div>
  );
};

export default RouterMenu;
