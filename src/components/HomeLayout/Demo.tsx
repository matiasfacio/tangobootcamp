import * as React from "react";
import { useHistory } from "react-router-dom";
import { VideoInterface } from "../UIComponents/VideoInterface";
import styled from "styled-components";
import { PrimaryButton } from "../UIComponents/PrimaryButton";
import { Video } from "../../backend/VideoApi";
import { useAuth0 } from "@auth0/auth0-react";

export interface DemoProps {}

const Demo: React.FunctionComponent<DemoProps> = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const history = useHistory();

  const authenticateUser = () => {
    !isAuthenticated ? loginWithRedirect() : history.push("/userarea");
  };

  const HowitWorksVideo: Video = {
    url: "https://vimeo.com/590999723",
    name: "UserArea",
    id: 99,
  };
  return (
    <Section id="how-does-it-work">
      <SectionContainer>
        <SectionTitle>
          <h2>How does it work?!</h2>
        </SectionTitle>
        <VideoContainer>
          <VideoInterface video={HowitWorksVideo} autoplay={false} />
          <VideoDescription>
            <div>
              <h2>Have a look!</h2>
              <p>
                In this short video, you can see that it is quite easy to
                navigate in the user area, it is so intuitive that it allows you
                to focus on what matters to you the most: learning the structure
                of Argentine Tango.
              </p>
            </div>
            <PrimaryButtonBoost onClick={() => authenticateUser()}>
              Register now!
            </PrimaryButtonBoost>
          </VideoDescription>
        </VideoContainer>
      </SectionContainer>
    </Section>
  );
};

export default Demo;

const Section = styled.section`
  margin: 0px auto;
  padding-top: 50px;
  min-height: 80vh;
  background-color: var(--body-bg-color);
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const VideoContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;
  @media screen and (max-width: 994px) {
    flex-wrap: wrap;
  }
`;

const VideoDescription = styled.div`
  width: 50%;
  padding: 30px;
  color: var(--white);
  h2 {
    color: var(--white);
  }
  @media screen and (max-width: 994px) {
    width: 100%;
    padding: 10px;
  }
`;

const SectionTitle = styled.div`
  h2 {
    font-size: 2.5rem;
    color: var(--white);
    text-transform: uppercase;
  }
`;

const PrimaryButtonBoost = styled(PrimaryButton)`
  &:hover {
    background-color: var(--pink);
    color: var(--black);
  }
`;
