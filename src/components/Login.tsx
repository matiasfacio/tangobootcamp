import * as React from "react";
import { UserContext } from "../contexts/UserContext";
import LoginUser from "./LoginUser";
import { useHistory } from "react-router-dom";

const Login: React.FunctionComponent = () => {
  const { login } = React.useContext(UserContext);
  const history = useHistory();

  return (
    <section id="login_register">
      {!login && (
        <div className="login_register_container">
          <LoginUser />
        </div>
      )}
      {login && history.push("/userarea")}
    </section>
  );
};

export default Login;
