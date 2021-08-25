import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { VideoInterface } from "../components/UIComponents/VideoInterface";
import VideoDescription from "./VideoDescription";
import { useQueryAllVideos } from "./queries";
import { useAuth0 } from "@auth0/auth0-react";
import { List } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { Video } from "./VideoApi";

export interface BackendProps {}

export const Course: React.FC<BackendProps> = () => {
  const history = useHistory();
  const params: { id: string } = useParams();
  const { data: videos, isLoading } = useQueryAllVideos(params.id);
  const [actualVideo, setActualVideo] = React.useState<Video | null>(null);
  const [showVideos, setShowVideos] = React.useState<boolean>(true);
  const { isAuthenticated } = useAuth0();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!isAuthenticated && history.push("/login")}
      <BackendLayout theme={showVideos.toString()}>
        <LeftSideScreen theme={showVideos.toString()}>
          {actualVideo ? (
            <VideoInterface
              video={actualVideo}
              isLoading={isLoading}
              listOpen={showVideos}
              autoplay={true}
            />
          ) : (
            <ChooseVideoContainer>
              <h2>Choose a video</h2>
            </ChooseVideoContainer>
          )}
        </LeftSideScreen>
        {!showVideos && (
          <OpenVideoList onClick={() => setShowVideos(true)}>
            Course Content
            <DoubleLeftOutlined
              style={{ marginLeft: 20, display: "inline-block" }}
            />
          </OpenVideoList>
        )}
        <RightSideScreen theme={showVideos.toString()}>
          <List
            header={
              <>
                <CloseVideoList onClick={() => setShowVideos(false)}>
                  Course Content
                  <DoubleRightOutlined
                    style={{ marginLeft: 20, display: "inline-block" }}
                  />
                </CloseVideoList>
              </>
            }
            size="large"
            bordered
            style={{
              backgroundColor: "white",
              boxShadow: "5px 5px 10px rgb(213, 213, 213)",
            }}
            dataSource={videos}
            renderItem={(video) => (
              <List.Item
                onClick={() => {
                  setActualVideo(video);
                }}
                style={{ cursor: "pointer" }}
              >
                {video.name}
              </List.Item>
            )}
          />
        </RightSideScreen>

        <Transcription>
          {actualVideo && <VideoDescription video={actualVideo} />}
        </Transcription>
      </BackendLayout>
    </>
  );
};

const BackendLayout = styled.div`
  width: 100%;
  margin: 70px auto;
  padding: 0 0em;
  min-height: 100vh;
  background-color: white;
  display: grid;
  justify-content: flex;
  align-items: flex-start;
  ${({ theme }) =>
    theme !== "true"
      ? "grid-template-columns: 100%; grid-template-areas: 'video' 'transcription';"
      : "grid-template-columns: 80% 20%;grid-template-areas: 'video .' 'transcription .'"};
  grid-template-rows: auto auto;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto 500px;
  }
  @media screen and (max-width: 1200px) {
    ${({ theme }) =>
      theme !== "true"
        ? "grid-template-columns: 100%; grid-template-areas: 'video' 'transcription';"
        : "grid-template-columns: 60% 40%;grid-template-areas: 'video .' 'transcription .'"};
  }
`;

const LeftSideScreen = styled.div`
  background-color: black;
  grid-area: video;
  width: 100%;
  min-height: ${({ theme }) => (theme === "true" ? "60vh" : "80vh")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  h2 {
    color: white;
  }
`;

const RightSideScreen = styled.div`
  width: 20vw;
  position: absolute;
  top: 70px;
  right: 0;
  height: 100%;
  transform: ${(props) =>
    props.theme === "true" ? "translateX(0)" : "translateX(100vw)"};
  transition: all 500ms ease-in-out;
  @media screen and (max-width: 1200px) {
    width: 40vw;
  }
`;

const Transcription = styled.div`
  display: flex;
  justify-content: center;
  grid-area: transcription;
  width: 100%;
  height: 80vh;
  margin: 50px 2.5vw;
  overflow-y: scroll;
`;

const OpenVideoList = styled.div`
  position: fixed;
  top: 60px;
  right: 0px;
  padding: 5px 10px;
  z-index: 1001;
  cursor: pointer;
  font-size: 1.3rem;
  color: white;
  &:hover {
    background-color: var(--black);
  }
`;

const CloseVideoList = styled.div`
  display: inline-block;
  font-size: 1.3rem;
  cursor: pointer;
`;

const ChooseVideoContainer = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
