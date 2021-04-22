import * as React from "react";
import { UserContext } from "../contexts/UserContext";
import useForm from "../hooks/useForm";

const Register: React.FunctionComponent = () => {
  const { setUserInfo, setLogin } = React.useContext(UserContext);
  const { formData, handleChange, clearForm, resetForm } = useForm({
    userId: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <section id="register">
      <div className="register-container">
        <h2>Register to the bootcamp</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLogin(true);
            setUserInfo(formData);
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
            placeholder="choose your user Id"
            value={formData.userId}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="your name"
            value={formData?.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="your last name"
            value={formData?.lastName}
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
            placeholder="enter a password"
            name="password"
            value={formData?.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
