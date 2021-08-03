import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "./UIComponents/PrimaryButton";

export const Pricing = () => {
  return (
    <PricingStylesContainer id="price">
      <PricingStyles>
        <OriginalPrice>
          <Title>
            <span>Tango Structure Bootcamp</span> with life long access and
            updates
          </Title>
          <Price>99.-€</Price>
        </OriginalPrice>
        <hr style={{ width: "100%" }} />
        <PriceContainer>
          <Title>
            Take adventage of our launch promotion until October 15th and get
            20€ discount!
          </Title>
          <Price theme={true}>99.-€</Price>
          <Price>79.-€</Price>
        </PriceContainer>
        <PrimaryButton style={{ alignSelf: "center", marginTop: 50 }}>
          Sign up now!
        </PrimaryButton>
      </PricingStyles>
    </PricingStylesContainer>
  );
};

const PricingStylesContainer = styled.div`
  margin: 0px auto;
  padding: 50px 2em;
  background-color: var(--black);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 3px white solid;
`;

const PricingStyles = styled.div`
  display: flex;
  max-width: 800px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 2px;
  border: 2px var(--black) solid;
  padding: 50px 30px;
  background-color: white;
`;

const Price = styled.div`
  color: var(--blue);
  font-size: 4vw;
  font-weight: 800;
  padding-left: 50px;
  font-family: serif;
  position: relative;
  ${({ theme }) =>
    theme === true &&
    `
    transform: scale(0.7);
    &::after {
    position: absolute;
    left: 20%;
    top: 50%;
    content: "";
    height: 10px;
    width: 100px;
    background-color: var(--pink);
    transform: rotateZ(315deg);
    }`}
`;

const Title = styled.div`
  color: var(--black);
  font-size: 1.6vw;
  font-family: serif;
  max-width: 350px;
  span {
    background-color: var(--pink);
    color: white;
    padding: 5px 10px;
    border-radius: 2px;
  }
`;

const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OriginalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
