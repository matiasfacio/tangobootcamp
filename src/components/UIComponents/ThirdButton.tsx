import styled from "styled-components";

export const ThirdButton = styled.button`
  background-color: white;
  color: var(--black);
  padding: 10px 10px;
  font-size: 1.2rem;
  border-radius: 2px;
  width: 150px;
  font-size: var(--btn-fontsize);
  font-weight: var(--btn-weight);
  border: none;
  outline: none;
  &:hover {
    background-color: var(--pink);
    color: white;
  }
`;
