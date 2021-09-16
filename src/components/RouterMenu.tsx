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

const AuthenticatedRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
          <>
            <UserAreaMenu />
            {children}
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

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
        <AuthenticatedRoute path="/courses">
          <Courses />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/course/:id">
          <Course />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/userarea">
          <UserArea />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/account-settings">
          <AccountInformation />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/cart">
          <Cart />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/payment-confirmation">
          <PaymentConfirmation />
        </AuthenticatedRoute>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default RouterMenu;
