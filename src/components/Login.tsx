import * as React from "react";
import { UserContext } from "../contexts/UserContext";
import UserArea from "./UserArea";
import LoginUser from "./LoginUser";
import Register from "./Register";

const Login: React.FunctionComponent = () => {
  const { login } = React.useContext(UserContext);

  return (
    <section id="login_register">
      {!login && (
        <div className="login_register_container">
          <LoginUser />
          <Register />
        </div>
      )}
      {login && <UserArea />}
    </section>
  );
};

export default Login;
