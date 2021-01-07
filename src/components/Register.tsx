import * as React from "react";

export type RegDataType = {
  userId?: string;
  name?: string;
  lastname?: string;
  email?: string;
  password?: string;
  passwordRentry?: string;
};

const Register: React.FunctionComponent = () => {
  const [registrationData, setRegistrationData] = React.useState<RegDataType>({
    userId: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    passwordRentry: "",
  });

  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <section id="register">
      <div className="register-container">
        <h2>Create an account</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            inputRef.current?.focus();
            setRegistrationData({
              userId: "",
              name: "",
              lastname: "",
              email: "",
              password: "",
              passwordRentry: "",
            });
          }}
        >
          <label>UserId</label>
          <input
            ref={inputRef}
            type="text"
            placeholder="choose your user Id"
            value={registrationData?.userId}
            onChange={(e) =>
              setRegistrationData({
                ...registrationData,
                userId: e.target.value,
              })
            }
            required
          />
          <label>Name</label>
          <input
            type="text"
            placeholder="your name"
            value={registrationData?.name}
            onChange={(e) =>
              setRegistrationData({ ...registrationData, name: e.target.value })
            }
            required
          />
          <label>Last Name</label>
          <input
            type="text"
            placeholder="your last name"
            value={registrationData?.lastname}
            onChange={(e) =>
              setRegistrationData({
                ...registrationData,
                lastname: e.target.value,
              })
            }
            required
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="your email"
            value={registrationData?.email}
            onChange={(e) =>
              setRegistrationData({
                ...registrationData,
                email: e.target.value,
              })
            }
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="enter a password"
            value={registrationData?.password}
            onChange={(e) =>
              setRegistrationData({
                ...registrationData,
                password: e.target.value,
              })
            }
            required
          />
          <label>Re-entry your password</label>
          <input
            type="password-rentry"
            placeholder="re-enter your password"
            value={registrationData?.passwordRentry}
            onChange={(e) =>
              setRegistrationData({
                ...registrationData,
                passwordRentry: e.target.value,
              })
            }
            required
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
