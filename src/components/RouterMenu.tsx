import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Courses } from "../backend/Courses";
import { Course } from "../backend/Course";
import { UserArea } from "../backend/UserArea";
import { useAuth0 } from "@auth0/auth0-react";
import { AccountInformation } from "../backend/AccountInformation";
import { UserAreaMenu } from "../backend/UserAreaMenu";
import { Cart } from "./Cart/Cart";
import { PaymentConfirmation } from "./Cart/PaymentConfirmation";
import { Main } from "./Main";

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
    <>
      {isAuthenticated && <Redirect to="/userarea" />}
      <Switch>
        <Route path="/" exact>
          <Main />
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
    </>
  );
};

export default RouterMenu;
