import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Loader from "react-loader-spinner";
import { Video } from "../../backend/VideoApi";

export interface VideoInterfaceProps {
  video: Video;
  isLoading?: boolean;
  listOpen?: boolean;
  autoplay?: boolean;
}

export const VideoInterface: React.FC<VideoInterfaceProps> = ({
  video,
  isLoading,
  listOpen,
  autoplay,
}) => {
  return (
    <>
      <VideoContainer>
        <VideoOnlyContainer>
          {isLoading ? (
            <Loader type={"Grid"} color="black" />
          ) : (
            <ReactPlayer
              url={video.url}
              config={{
                vimeo: {
                  playerOptions: {
                    autoplay: autoplay,
                    muted: false,
                    Controls: true,
                    height: "100%",
                    loop: true,
                    dnt: true,
                    byline: false,
                    api: false,
                    responsive: true,
                  },
                },
              }}
              onPlay={() => console.log("playing now")}
              progressInterval={250}
            />
          )}
        </VideoOnlyContainer>
      </VideoContainer>
    </>
  );
};

const VideoContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;
`;

const VideoOnlyContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
