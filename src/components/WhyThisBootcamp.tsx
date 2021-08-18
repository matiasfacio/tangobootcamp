import React from "react";
import styled from "styled-components";

export const WhyThisBootcamp = () => {
  return (
    <WhyContainer>
      <WhyContent>
        <Title>
          <h2>Why we have created it?</h2>
        </Title>
        <q>
          Fact: 100% of dancers who feel they could do better, have problems
          understanding the Tango structure.
        </q>
        <ul>
          <li>
            <p>
              After 20+ years of experience teaching Argentine Tango, we keep
              seeing that the same problems repeating and repeating, no matter
              the culture nor the level.
            </p>
          </li>
          <li>
            <p>
              The Tango Structure isn't hard to understand, actually it is quite
              simple! But yet, most of the dancers we know, not matter if they
              are professionals dancers, teachers, maestros or great popular
              dancers, don't know sometimes the simple things!
            </p>
          </li>
          <li>
            <p>
              Knowing how the Tango Structure works, will save you so much time
              and so much money! Yes, you can save YEARS of learning and LOT OF
              MONEY.
            </p>
          </li>
        </ul>
      </WhyContent>
    </WhyContainer>
  );
};

const WhyContainer = styled.section`
  background-color: var(--black);
  width: 100%;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    margin-top: 50px;
  }
`;

const WhyContent = styled.div`
  max-width: 800px;
  color: white;
  q {
    font-size: 2rem;
    padding: 20px 0;
  }
`;

const Title = styled.div`
  padding: 10px;
  h2 {
    font-size: 2.5rem;
    color: white;
    text-transform: uppercase;
    text-align: center;
  }
`;
