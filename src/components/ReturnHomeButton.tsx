import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PrimaryButton } from "./UIComponents/PrimaryButton";

export interface ReturnHomeButtonProps {}

const ReturnHomeButton: React.FC<ReturnHomeButtonProps> = () => {
  return (
    <Link to={"/userarea"}>
      <PrimaryButtonBoost>Exit Course</PrimaryButtonBoost>
    </Link>
  );
};

export default ReturnHomeButton;

const PrimaryButtonBoost = styled(PrimaryButton)`
  position: fixed;
  top: 10px;
  right: 10px;
`;
