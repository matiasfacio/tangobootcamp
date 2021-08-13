import React from "react";
import styled from "styled-components";
import { Form, Input } from "antd";
import { useUserMutations } from "../util/useUserMutations";
import { PrimaryButton } from "../components/UIComponents/PrimaryButton";

export const UpdateUserInformation = ({ user }) => {
  const userUpdate = useUserMutations(user);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (newData) => {
    newData.id = user.id;
    userUpdate.mutate(newData);
  };

  return (
    <Container>
      <Title>Information</Title>
      <Form
        {...layout}
        initialValues={{
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        }}
        onFinish={(values) => onFinish(values)}
      >
        <Form.Item label="Name" name="name">
          <Input placeholder={user.name || "Name"} />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName">
          <Input placeholder={user.lastName || "Last Name"} />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder={user.email || "Email"} />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input placeholder={user.phone || "Phone number"} />
        </Form.Item>
        <Form.Item style={{ alignSelf: "flex-end" }}>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </Form.Item>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--black);
  font-family: "Fira Sans", sans-serif;
  font-size: 1.5rem;
  padding-top: 20px;
  padding-bottom: 20px;
`;
