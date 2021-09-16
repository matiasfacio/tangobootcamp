import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { PaymentConfirmation } from "./Cart/PaymentConfirmation";
import { Main } from "./Main";
import { LoaderSpinner } from "./UIComponents/LoaderSpinner";

const Courses = lazy(() => import("../backend/Courses"));
const Course = lazy(() => import("../backend/Course"));
const UserArea = lazy(() => import("../backend/UserArea"));
const UserAreaMenu = lazy(() => import("../backend/UserAreaMenu"));
const AccountInformation = lazy(() => import("../backend/AccountInformation"));
const Cart = lazy(() => import("./Cart/Cart"));

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
      <Suspense fallback={<LoaderSpinner />}>
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
      </Suspense>
    </>
  );
};

export default RouterMenu;
