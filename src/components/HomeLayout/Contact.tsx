import * as React from "react";
import useForm from "../../hooks/useForm";
import styled from "styled-components";
import { PrimaryButton } from "../UIComponents/PrimaryButton";
import { Modal } from "antd";

export type FormInfo = {
  name?: string;
  email?: string;
  about?: string;
  text?: string;
};

const BASE_URL = "https://tbc.tangodefinitions.com/api";

export const Contact: React.FC = () => {
  const [modalVisiblity, setModalVisibility] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState("");
  const { formData, handleChange, resetForm, clearForm } = useForm({
    name: "",
    email: "",
    about: "",
    text: "",
  });

  const sendEmail = async () => {
    try {
      const result = await fetch(`${BASE_URL}/contact`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (result.ok) {
        setMessage(
          "Your email was sent, we will answer to you as soon as possible."
        );
      } else {
        throw new Error();
      }
    } catch (err) {
      setMessage(
        "Your message could not be send. Please send us an email or give us a call, thank you."
      );
    }
    setModalVisibility(true);
  };

  return (
    <>
      <SectionContact id="contact">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendEmail();
            resetForm();
            clearForm();
          }}
        >
          <SubcontainerInformation>
            <h2>Contact us:</h2>
            <div>Phone: (+49) 01774946117 (Germany)</div>
            <div>Email: info@tangobootcamp.net</div>
          </SubcontainerInformation>
          <Container>
            <SubContainer>
              <h2>Or use our Contact Form</h2>
              <label>Your name</label>
              <input
                id="name"
                type="text"
                name="name"
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
      <Modal
        visible={modalVisiblity}
        onCancel={() => setModalVisibility(false)}
        footer={
          <PrimaryButton onClick={() => setModalVisibility(false)}>
            Ok
          </PrimaryButton>
        }
      >
        {message}
      </Modal>
    </>
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
