import * as React from "react";
import useForm from "../hooks/useForm";

export type FormInfo = {
  name?: string;
  email?: string;
  about?: string;
  text?: string;
};

export const Contact: React.FC = () => {
  const { formData, handleChange, resetForm, clearForm } = useForm({
    name: "",
    email: "",
    about: "",
    text: "",
  });

  return (
    <section id="contact">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          resetForm();
          clearForm();
        }}
      >
        <div className="contact-container">
          <div className="subcontainer-left">
            <h2>Contact</h2>
            <label>Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData?.name}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={formData?.email}
            />
            <label>About</label>
            <input
              id="about"
              type="text"
              name="about"
              required
              onChange={handleChange}
              value={formData?.about}
            />
          </div>
          <div className="subcontainer-right">
            <textarea
              id="text"
              placeholder="send us a message!"
              name="text"
              required
              value={formData?.text}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
