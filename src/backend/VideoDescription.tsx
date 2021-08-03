import styled from "styled-components";
import React from "react";
import { Video } from "./VideoApi";

export interface VideoDescriptionProps {
  video?: Video;
}

const VideoDescription: React.SFC<VideoDescriptionProps> = ({ video }) => {
  return (
    <>
      <ContentContainer>
        <Title>
          <h2>Description</h2>
        </Title>
        <Snippet>
          <p>{video.snippet ? video.snippet : "some snippet"}</p>
        </Snippet>
        <div>
          <p>{video.description ? video.description : "somedescription"}</p>
        </div>
      </ContentContainer>
    </>
  );
};

export default VideoDescription;

const ContentContainer = styled.div`
  max-width: 800px;
  min-width: 80%;
  background-color: white;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  & > * {
    margin-bottom: 20px;
  }
`;

const Snippet = styled.div`
  color: var(--black);
  font-weight: 700;
  font-size: 1.1rem;
`;

const Title = styled.div``;
