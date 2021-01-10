import * as React from "react";
import Login from "./Login";
import Register from "./Register";
import UserContextProvider from "../contexts/UserContext";

const LoginRegister: React.FunctionComponent = () => {
  return (
    <section id="login_register">
      <div className="login_register_container">
        <Register />
        <UserContextProvider>
          <Login />
        </UserContextProvider>
      </div>
    </section>
  );
};

export default LoginRegister;
