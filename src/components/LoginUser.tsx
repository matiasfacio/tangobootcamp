import * as React from "react";
import { UserContext } from "../contexts/UserContext";
import PrimaryButton from "./UIComponents/PrimaryButton";


export type userLogin = {
  userId?: string;
  email?: string;
  password?: string;
};

const LoginUser: React.FunctionComponent = () => {
  const [formData, setFormData] = React.useState<userLogin>({
    userId: "",
    email: "",
    password: "",
  });
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { setLogin } = React.useContext(UserContext);

  return (
    <div className="login_container">
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLogin(true);
          setFormData({ userId: "", password: "", email: "" });
          inputRef.current?.focus();
        }}
      >
        <label>UserId</label>
        <input
          ref={inputRef}
          type="text"
          name="userId"
          placeholder="your userID"
          value={formData?.userId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, userId: e.target.value })
          }
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="your email"
          value={formData?.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData?.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        {/* <button type="submit">Sign in</button> */}
        <PrimaryButton>Sign in</PrimaryButton>
      </form>
    </div>
  );
};

export default LoginUser;
