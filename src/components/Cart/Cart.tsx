import React from "react";
import styled from "styled-components";
import { Table, Modal } from "antd";
import { CartContext, Course } from "../../contexts/CartContext";
import { DeleteOutlined } from "@ant-design/icons";
import { PrimaryButton } from "../UIComponents/PrimaryButton";
import CheckoutForm from "./CheckoutForm";
import { SecurityModal } from "./SecurityModal";

export const Cart = () => {
  const { cart, removeProductFromCart } = React.useContext(CartContext);
  const [modalVisibility, setModalVisibility] = React.useState<boolean>(false);
  const [modalSecurityVisibility, setModalSecurityVisibility] =
    React.useState<boolean>(false);

  const cartTotal: number = cart
    .map((course) => course.value)
    .reduce((a, b) => a + b, 0);

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "value",
      key: "value",
      width: "10%",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      width: "10%",
      key: "currency",
      render: (field) => {
        if (field === "eur") {
          return "€";
        } else return "u$s";
      },
    },
    {
      title: "Action",
      key: "action",
      render: (field: Course) => {
        return (
          <DeleteOutlined onClick={() => removeProductFromCart(field.id)} />
        );
      },
    },
  ];

  return (
    <>
      <CartSection>
        <Title>
          <h2>Shopping Cart</h2>{" "}
        </Title>
        <Table
          columns={columns}
          dataSource={cart}
          style={{ width: 800 }}
          pagination={false}
          footer={() => (
            <div style={{ textAlign: "right" }}>
              Total: {cartTotal !== 0 ? cartTotal : 0} €
            </div>
          )}
        />
        <PrimaryButton
          key="payment"
          disabled={!!!cartTotal}
          style={
            !!!cartTotal
              ? {
                  marginTop: 20,
                  alignSelf: "flex-end",
                  opacity: 0.3,
                  cursor: "not-allowed",
                }
              : { marginTop: 20, alignSelf: "flex-end", opacity: 1 }
          }
          onClick={() => setModalVisibility(true)}
        >
          Proceed to Payment
        </PrimaryButton>
        <PrimaryButton
          key="security"
          style={{ marginTop: 20, alignSelf: "flex-end" }}
          onClick={() => setModalSecurityVisibility(true)}
        >
          How do we handle security
        </PrimaryButton>
        <Modal
          destroyOnClose
          visible={modalVisibility}
          onCancel={() => setModalVisibility(false)}
          footer={
            <PrimaryButton onClick={() => setModalVisibility(false)}>
              Cancel
            </PrimaryButton>
          }
        >
          <CheckoutForm />
        </Modal>
        <Modal
          title="How do we handle Security in Tangobootcamp.net"
          visible={modalSecurityVisibility}
          footer={[
            <PrimaryButton onClick={() => setModalSecurityVisibility(false)}>
              Ok
            </PrimaryButton>,
          ]}
        >
          <SecurityModal />
        </Modal>
      </CartSection>
    </>
  );
};

const CartSection = styled.section`
  background-color: white;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  max-width: 800px;
`;

const Title = styled.div`
  text-align: center;
`;
