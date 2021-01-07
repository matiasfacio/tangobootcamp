import * as React from "react";
import Login from "./Login";
import Register from "./Register";

const LoginRegister: React.FunctionComponent = () => {
  return (
    <section id = "login_register">
    <div className = "login_register_container">
      <Register />
      <Login />
    </div>
    </section>
  );
};

export default LoginRegister;
