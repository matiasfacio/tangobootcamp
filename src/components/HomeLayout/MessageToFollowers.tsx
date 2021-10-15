import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../UIComponents/PrimaryButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

export const MessageToFollowers = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const history = useHistory();

  const authenticateUser = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      history.push("/userarea");
    }
  };

  return (
    <TangoStructureSection>
      <TangoStructureContainer>
        <Title>
          <h2>A message to followers</h2>
        </Title>
        <ul>
          <li>
            <p>
              As we were creating this bootcamp, many follower colleages asked
              us how "The Tango Structure Bootcamp" could be useful to followers
              as well. Of course we understand their concerns.
            </p>
          </li>
          <li>
            <p>
              We want to emphasize that this Bootcamp is so much useful to
              followers as well. When a follower knows the structure of tango,
              she/he will become so much independient of any leader, focusing on
              connection, expression and musicality and not on what to do, as
              this will become a natural response for simply understanding what
              is happening.
            </p>
          </li>
          <li>
            <p>
              We can asure you, that what you will learn in this bootcamp, will
              give you the freedom of dancing.
            </p>
          </li>
          <li style={{ listStyle: "none" }}>
            <p>
              Both followers and leaders, are very welcome to join "The Tango
              Structure Bootcamp".
            </p>
            <PrimaryButtonBoost onClick={() => authenticateUser()}>
              Sign up
            </PrimaryButtonBoost>
          </li>
        </ul>
      </TangoStructureContainer>
    </TangoStructureSection>
  );
};

const TangoStructureSection = styled.section`
  background-color: var(--body-bg-color);
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

const PrimaryButtonBoost = styled(PrimaryButton)`
  padding: 20px 20px;
`;
