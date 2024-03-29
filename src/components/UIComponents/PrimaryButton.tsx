import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: var(--pink);
  border-radius: 2px;
  padding: 10px 10px;
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: var(--btn-fontsize);
  font-weight: var(--btn-weight);
  transition: all 0.5s ease;
  &:hover {
    background-color: black;
    color: white;
  }
`;
