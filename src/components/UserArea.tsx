import * as React from "react";
import { UserContext } from "../contexts/UserContext";
import {useHistory} from 'react-router-dom';


export const UserArea: React.FC = () => {
  const { login, setLogin } = React.useContext(UserContext);
  const history = useHistory()

  return (
    <section id="userarea" style={{ height: "80vh", marginTop: "20vh" }}>
      <h2>User Area</h2>
      {login ? "welcome dear..." : history.push('/login')}
      <h3>This is your current state</h3>
      <button onClick= {()=> setLogin(false)}>Logout</button>
    </section>
  );
};

export default UserArea;
