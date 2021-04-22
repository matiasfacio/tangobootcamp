import * as React from "react";
import useForm from "../hooks/useForm";

export interface FormInfo {
  name?: string;
  email?: string;
  about?: string;
  text?: string;
}

export const Contact: React.FC = () => {
  const { formData, handleChange, resetForm, clearForm } = useForm({
    name: "",
    email: "",
    about: "",
    text: "",
  });

  return (
    <section id="contact">
      <form>
        <div className="contact-container">
          <div className="subcontainer-left">
            <h2>Contact</h2>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData?.name}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={formData?.email}
            />
            <label>About</label>
            <input
              type="text"
              name="about"
              required
              onChange={handleChange}
              value={formData?.about}
            />
          </div>
          <div className="subcontainer-right">
            <textarea
              placeholder="send us a message!"
              name="text"
              required
              value={formData?.text}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
            <button type="button" onClick={clearForm}>
              Clear Form
            </button>
            <button type="button" onClick={resetForm}>
              Reset Form
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
