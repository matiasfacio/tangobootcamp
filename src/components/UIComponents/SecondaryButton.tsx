import styled from "styled-components";

export const SecondaryButton = styled.button`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  border-radius: 2px;
  border: none;
  outline: none;
  padding: 10px 10px;
  font-size: var(--btn-fontsize);
  font-weight: var(--btn-weight);
  cursor: pointer;
  &:hover {
    background-color: var(--pink);
    color: white;
  }
`;
