import React from "react";
import styled from "styled-components";
import { Form, Input, Modal } from "antd";
import { useUserMutations } from "../util/useUserMutations";
import { PrimaryButton } from "../components/UIComponents/PrimaryButton";
import { useQueryClient } from "react-query";

const OnResult = ({
  onOk,
  visible,
  message,
}: {
  onOk: () => void;
  visible: boolean;
  message: string;
}) => {
  return (
    <Modal
      visible={visible}
      title={"Message"}
      footer={<PrimaryButton onClick={() => onOk()}>Ok</PrimaryButton>}
    >
      {message}
    </Modal>
  );
};

export const UpdateUserInformation = ({ user }) => {
  const [success, setSuccess] = React.useState<boolean>(null);
  const [error, setError] = React.useState(false);
  const queryClient = useQueryClient();
  const options = {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user", user.email]);
      setSuccess(data.ok);
    },
    onError: (data) => {
      console.log("data", data);
      setError(!data.ok);
    },
  };

  const onOk = () => {
    if (success) {
      setSuccess(false);
    }
    if (error) {
      setError(false);
    }
  };

  const userUpdate = useUserMutations(user, options);

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
      <Title>
        <h3>Information</h3>
      </Title>
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
      <OnResult
        onOk={onOk}
        visible={success}
        message={"Your information was correctly updated."}
      />
      <OnResult
        onOk={onOk}
        visible={error}
        message={
          "Error: there was an error updating your data. We will look at it as soon as possible."
        }
      />
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
  padding-top: 20px;
  padding-bottom: 20px;
`;
