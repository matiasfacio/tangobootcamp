import * as React from "react";
import AllUsers from "./AllUsers";
import { AdminArea } from "../contexts/AdminArea";
import AdminLogin from "./AdminLogin";

export const Admin: React.FC = () => {
  const { login, setLogin } = React.useContext(AdminArea);

  return (
    <section id="admin_area">
      <h2>Welcome to the Admin Area </h2>
      {login && <button onClick={() => setLogin(!login)}>logout</button>}
      {login && (
        <div>
          <AllUsers />
        </div>
      )}
      {!login && <AdminLogin />}
    </section>
  );
};

export default Admin;
