import * as React from "react";
import { AdminArea } from "../contexts/AdminArea";

export type Login = {
  adminId?: string;
  email?: string;
  password?: string;
};

export const AdminLogin: React.FC = () => {
  const { setLogin } = React.useContext(AdminArea);
  const [loginEntry, setLoginEntry] = React.useState<Login>({
    adminId: "",
    email: "",
    password: "",
  });

  return (
    <div id = "adminlogin-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLogin(true);
        }}
      >
        <label>Admin Id</label>
        <input
          type="text"
          onChange={(e) =>
            setLoginEntry({ ...loginEntry, adminId: e.target.value })
          }
        />
        <label>Email</label>
        <input
          type="email"
          onChange={(e) =>
            setLoginEntry({ ...loginEntry, email: e.target.value })
          }
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) =>
            setLoginEntry({ ...loginEntry, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
