import * as React from "react";
import { UserContext } from "../contexts/UserContext";
import {UserInfo as UserInterface} from "../contexts/UserContext"


// export type RegDataType = {
//   userId?: string;
//   name?: string;
//   lastname?: string;
//   email?: string;
//   password?: string;
// };

const Register: React.FunctionComponent = () => {
  const { setUserInfo, setLogin } = React.useContext(UserContext);
  const [registrationData, setRegistrationData] = React.useState<UserInterface>({
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
            setUserInfo(registrationData);
            setLogin(true);
            inputRef.current?.focus();
            setRegistrationData({
              userId: "",
              name: "",
              lastName: "",
              email: "",
              password: "",
            });
          }}
        >
          <label>UserId</label>
          <input
            ref={inputRef}
            type="text"
            name="userId"
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
            name="name"
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
            name="lastName"
            placeholder="your last name"
            value={registrationData?.lastName}
            onChange={(e) =>
              setRegistrationData({
                ...registrationData,
                lastName: e.target.value,
              })
            }
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
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
            name="password"
            value={registrationData?.password}
            onChange={(e) =>
              setRegistrationData({
                ...registrationData,
                password: e.target.value,
              })
            }
            required
          />
          {/* <label>Re-entry your password</label>
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
          /> */}
          <button type="submit">Sign up</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
