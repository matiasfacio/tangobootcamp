import * as React from "react";
import useForm from "../hooks/useForm";
import styled from "styled-components";
import { PrimaryButton } from "../components/UIComponents/PrimaryButton";

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
    <SectionContact id="contact">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          resetForm();
          clearForm();
        }}
      >
        <SubcontainerInformation>
          <h2>Contact Us:</h2>
          <div>Phone: (0049) 01774946117 (Germany)</div>
          <div>Email: info@tangobootcamp.net</div>
        </SubcontainerInformation>
        <Container>
          <SubContainer>
            <h2>Or use our Contact Form</h2>
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
          </SubContainer>
          <SubContainer>
            <textarea
              id="text"
              placeholder="send us a message!"
              name="text"
              required
              value={formData?.text}
              onChange={handleChange}
            ></textarea>
            <PrimaryButton>Submit</PrimaryButton>
          </SubContainer>
        </Container>
      </form>
    </SectionContact>
  );
};

export default Contact;

const SectionContact = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  min-height: 100vh;
  h2 {
    color: var(--white);
  }
  form {
    width: 100% !important;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SubcontainerInformation = styled.div`
  color: var(--white);
  padding: 10px;
  flex-grow: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  & > * {
    padding: 10px 0;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
`;
