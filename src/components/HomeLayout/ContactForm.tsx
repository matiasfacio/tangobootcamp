import * as React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../UIComponents/PrimaryButton";
import { Modal, Form, Input } from "antd";

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

  const sendEmail = async (values) => {
    try {
      const result = await fetch(`${BASE_URL}/contact/contact`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
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
        <Title>
          <h2>Contact</h2>
        </Title>
        <Form
          layout="vertical"
          onFinish={(values) => {
            sendEmail(values);
          }}
        >
          <SubcontainerInformation>
            <div>Phone: (+49) 01774946117 (Germany)</div>
            <div>Email: info@tangobootcamp.net</div>
          </SubcontainerInformation>
          <Container>
            <SubContainer>
              <h2>Or use our Contact Form</h2>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    pattern: /[A-Z]\w+/gi,
                    message: "Enter a correct name",
                  },
                  {
                    message: "Name must be at least 3 characters",
                    min: 3,
                  },
                  {
                    required: true,
                    message: "Enter your name",
                  },
                ]}
              >
                <Input id="name" />
              </Form.Item>
              <Form.Item
                label="Email address"
                name="email"
                rules={[
                  {
                    message: "Enter a valid Email address",
                    type: "email",
                  },
                  {
                    required: true,
                    message: "Enter an Email address",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="About"
                name="about"
                rules={[
                  {
                    pattern: /[A-Z]\w+/gi,
                    message: "Enter a valid text",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </SubContainer>
            <SubContainer>
              <Form.Item
                name="text"
                rules={[
                  {
                    required: true,
                    message: "Enter you inquire here.",
                  },
                ]}
              >
                <textarea placeholder="send us a message!"></textarea>
              </Form.Item>

              <PrimaryButton>Submit</PrimaryButton>
            </SubContainer>
          </Container>
        </Form>
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
  background-color: var(--body-bg-color);
  min-height: 100vh;
  h2 {
    color: var(--white);
  }
  form {
    width: 100% !important;
    .ant-form-item-label > label {
      color: white;
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  h2 {
    font-size: 2.5rem;
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
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
  font-family: serif;
  font-size: 1.2rem;
  & > * {
    padding: 10px 0;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
`;
