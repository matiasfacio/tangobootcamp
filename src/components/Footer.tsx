import * as React from "react";
import styled from "styled-components";

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <FooterContainer>
      <div>Impressum</div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100vw;
  min-height: 60px;
  overflow: hidden;
  padding: 20px auto;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
