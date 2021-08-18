import React from "react";
import styled from "styled-components";
import { Table, Modal } from "antd";
import { CartContext } from "../../contexts/CartContext";
import { DeleteOutlined } from "@ant-design/icons";
import { PrimaryButton } from "../UIComponents/PrimaryButton";
import { SecurityModal } from "./SecurityModal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import { CheckoutCartForm } from "./CheckoutCartForm";
import { CheckoutForm } from "./CheckoutForm";
import { SecondaryButton } from "../UIComponents/SecondaryButton";
import { Course } from "../../backend/types";
import { CheckoutCartForm } from "./CheckoutCartForm";

const promise = loadStripe(
  "pk_test_51JLPEJGSbvKyqkt6N9SUPRbrzGgHyNQDPkyO2TbGF0XdolDWdjhNaQktlLoVylWs6nlV7BqDMis38xRiVNK6vou6009yTWVhDF"
);

export const Cart = () => {
  const { cart, removeProductFromCart } = React.useContext(CartContext);
  const [modalSecurityVisibility, setModalSecurityVisibility] =
    React.useState<boolean>(false);

  const cartTotal: number = cart
    .map((course) => course.value - course.discount)
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
      width: "100px",
      render: (field, course) => {
        return (
          <div>
            {field.toFixed(2)} {course.currency === "eur" ? "€" : "u$s"}
          </div>
        );
      },
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
      width: "100px",
      render: (field, course) => {
        return (
          <div>
            {field.toFixed(2)} {course.currency === "eur" ? "€" : "u$s"}
          </div>
        );
      },
    },
    {
      title: "Total",
      key: "total",
      width: "100px",
      render: (_, course) => {
        console.log(course);
        const value = course.value - course.discount;
        return (
          <div>
            {value.toFixed(2)} {course.currency === "eur" ? "€" : "u$s"}
          </div>
        );
      },
    },
    {
      title: "Action",
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
              Total: {cartTotal !== 0 ? cartTotal.toFixed(2) : 0} €
            </div>
          )}
        />

        <Elements stripe={promise}>
          <CheckoutForm cart={cart} />
          <CheckoutCartForm cart={cart} />
        </Elements>

        <SecondaryButton
          key="security"
          style={{ marginTop: 20, alignSelf: "center" }}
          onClick={() => setModalSecurityVisibility(true)}
        >
          How do we handle security
        </SecondaryButton>
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
