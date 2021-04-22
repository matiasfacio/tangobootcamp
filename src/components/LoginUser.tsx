import * as React from "react";
import { UserContext } from "../contexts/UserContext";
import PrimaryButton from "./UIComponents/PrimaryButton";
import useForm from "../hooks/useForm";

export type userLogin = {
  userId?: string;
  email?: string;
  password?: string;
};

const LoginUser: React.FunctionComponent = () => {
  const { formData, handleChange, clearForm, resetForm } = useForm({
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
          clearForm();
          resetForm();
          inputRef.current?.focus();
        }}
      >
        <label htmlFor="userId">UserId</label>
        <input
          id="userId"
          ref={inputRef}
          type="text"
          name="userId"
          placeholder="your userID"
          value={formData?.userId}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="your email"
          value={formData?.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          value={formData?.password}
          onChange={handleChange}
          required
        />
        <PrimaryButton>Sign in</PrimaryButton>
      </form>
    </div>
  );
};

export default LoginUser;
