import * as React from "react";
import { UserContext } from "../contexts/UserContext";

export const UserArea: React.FC = () => {
  const { login } = React.useContext(UserContext);

  return (
    <section id="userarea" style={{ height: "80vh", marginTop: "20vh" }}>
      <h2>User Area</h2>
      {login ? "welcome dear..." : "you must login first"}
    </section>
  );
};

export default UserArea;
