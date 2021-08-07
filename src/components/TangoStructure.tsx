import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "./UIComponents/PrimaryButton";
import { useAuth0 } from "@auth0/auth0-react";

export const TangoStructure = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const authenticateUser = () => {
    !isAuthenticated && loginWithRedirect();
  };

  return (
    <TangoStructureSection>
      <TangoStructureContainer>
        <Title>
          <h2>But what is the Tango Structure?!</h2>
        </Title>
        <ul>
          <li>
            <p>
              The Structure of the tango dance is the net, the matrix, the
              geometry hidden behind the beautiful tango movements and figures.
            </p>
          </li>
          <li>
            <p>
              It is the natural consequence of having a specifique type of
              embrace and two persons moving together to the music, no matter
              the style of the individuals or of the couple.
            </p>
          </li>
          <li>
            <p>
              And it is so important, that it has determined the Tango
              Choreography throughout the history of this dance.{" "}
            </p>
          </li>
          <li>
            <p>
              Some people limit the structure of the tango dance to the "giro"
              or "turn", but this is only the big picture.
            </p>
          </li>
          <li style={{ listStyle: "none" }}>
            Join us now to fully understand how this dance work!
            <PrimaryButton
              style={{ marginLeft: 20 }}
              onClick={() => authenticateUser()}
            >
              Sign up
            </PrimaryButton>
          </li>
        </ul>
      </TangoStructureContainer>
    </TangoStructureSection>
  );
};

const TangoStructureSection = styled.section`
  background-color: var(--black);
  min-height: 100vh;
  width: 100%;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    margin-top: 50px;
  }
`;

const TangoStructureContainer = styled.div`
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
