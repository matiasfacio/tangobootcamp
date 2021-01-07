import * as React from "react";

export type userLogin = {
  userId?: string;
  email?: string;
  password?: string;
};

const Login: React.FunctionComponent = () => {
  const [formData, setFormData] = React.useState<
    userLogin
  >({userId:'', email:'', password:''});
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <section id="login">
      <div className="login_container">
        <h2>or Login</h2>
        <form onSubmit = {e => {
            e.preventDefault();
            setFormData({userId:'', password: '', email:''})
            inputRef.current?.focus()
        }}>
          <label>UserId</label>
          <input
            ref={inputRef}
            type="text"
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
            placeholder="your email"
            value = {formData?.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={formData?.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
