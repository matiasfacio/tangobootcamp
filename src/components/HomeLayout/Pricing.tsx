import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../UIComponents/PrimaryButton";

export const Pricing = () => {
  return (
    <PricingStylesContainer id="price">
      <Title>
        <h2>Pricing</h2>
      </Title>
      <PricingStyles>
        <OriginalPrice>
          <Details>
            Master the Tango Structure <br />
            Tango Structure Bootcamp with life long access and updates
          </Details>
          <Price discount={false}>99€</Price>
        </OriginalPrice>
        <hr style={{ width: "100%" }} />
        <PriceContainer>
          <Details>Promo until January 15th 2022!</Details>
          <Price discount={true}>79€</Price>
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
  background-color: var(--body-bg-color);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const PricingStyles = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 2px;
  padding: 50px 30px;
  background-color: var(--body-bg-color);
  border-top-right-radius: 50px;
`;

const Price = styled.div<{ discount }>`
  color: var(--white);
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 800;
  margin-left: 50px;
  font-family: serif;
  position: relative;
  ${({ discount }) =>
    discount &&
    `border: 10px var(--pink) solid; border-radius: 50%; padding: 5px 10px`};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  h2 {
    font-size: 2.5rem;
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
  }
`;

const Details = styled.div`
  color: var(--white);
  font-size: 1.2rem;
  font-family: serif;
  max-width: 500px;
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
  margin-top: 50px;
`;

const OriginalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
