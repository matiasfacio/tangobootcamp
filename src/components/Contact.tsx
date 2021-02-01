import * as React from "react";

export interface FormInfo {
  name?: string;
  email?: string;
  text?: string;
}

export const Contact: React.FC = () => {
  const [contactForm, setContactForm] = React.useState<
    FormInfo | null | undefined
  >();
  console.log(contactForm);
  return (
    <section id="contact">
      <form>
        <div className="contact-container">
          <div className="subcontainer-left">
            <h2>Contact</h2>
            <label>Your Name</label>
            <input
              type="text"
              onChange={(e) =>
                setContactForm({ ...contactForm, name: e.target.value })
              }
            />
            <label>Email</label>
            <input
              type="email"
              onChange={(e) =>
                setContactForm({ ...contactForm, email: e.target.value })
              }
            />
            <label>About</label>
            <input type="text" />
          </div>
          <div className="subcontainer-right">
            <textarea
              placeholder="send us a message!"
              onChange={(e) =>
                setContactForm({ ...contactForm, text: e.target.value })
              }
            ></textarea>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
