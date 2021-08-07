import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../UIComponents/PrimaryButton";
import { Link } from "react-router-dom";

export const PaymentConfirmation = () => {
  return (
    <PaymentConfirmationSection>
      <h2>Congratulations!</h2>
      <h2>
        Your payment was succesful, now you have life long access to your
        course/s!
      </h2>
      <Link to="/courses">
        <PrimaryButton>Courses</PrimaryButton>
      </Link>
    </PaymentConfirmationSection>
  );
};

const PaymentConfirmationSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px auto;
`;
