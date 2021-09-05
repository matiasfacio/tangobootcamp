import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Demo from "./Demo";
import Header from "./Header";
import Instructors from "./Instructors";
import NavBar from "./NavBar";
import TheBootCamp from "./TheBootCamp";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import LifeLongAccess from "./LifeLongAccess";
import { Courses } from "../backend/Courses";
import { Course } from "../backend/Course";
import { UserArea } from "../backend/UserArea";
import ArrowPullDown from "./UIComponents/ArrowPullDown";
import { useAuth0 } from "@auth0/auth0-react";
import { AccountInformation } from "../backend/AccountInformation";
import { Pricing } from "./Pricing";
import { WhyThisBootcamp } from "./WhyThisBootcamp";
import { TangoStructure } from "./TangoStructure";
import { MessageToFollowers } from "./MessageToFollowers";
import { UserAreaMenu } from "../backend/UserAreaMenu";
import { BackToTop } from "./BackToTop";
import { Cart } from "./Cart/Cart";
import { PaymentConfirmation } from "./Cart/PaymentConfirmation";
import { RetrieveSession } from "./Cart/RetriveSession";

const RouterMenu = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated && <Redirect to="/userarea" />}
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Header />
          <TheBootCamp />
          <WhyThisBootcamp />
          <TangoStructure />
          <MessageToFollowers />
          <LifeLongAccess />
          <Demo />
          <Instructors />
          <Pricing />
          <ContactForm />
          <Footer />
          <ArrowPullDown />
          <BackToTop />
        </Route>
        {isAuthenticated && (
          <>
            <Route path="/courses">
              <UserAreaMenu />
              <Courses />
            </Route>
            <Route path="/course/:id">
              <UserAreaMenu />
              <Course />
            </Route>
            <Route path="/userarea">
              <UserArea />
            </Route>
            <Route path="/account-settings">
              <UserAreaMenu />
              <AccountInformation />
            </Route>
            <Route path="/cart">
              <UserAreaMenu />
              <Cart />
            </Route>
            <Route path="/payment-confirmation">
              <UserAreaMenu />
              <PaymentConfirmation />
            </Route>
            <Route path="/retrieve-session">
              <RetrieveSession />
            </Route>
          </>
        )}

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default RouterMenu;
