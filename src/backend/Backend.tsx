import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { VideoInterface } from "../components/UIComponents/VideoInterface";
import VideoDescription from "./VideoDescription";
import { useQueryAllVideos } from "./queries";
import { useAuth0 } from "@auth0/auth0-react";
import { PrimaryButton } from "../components/UIComponents/PrimaryButton";
import { List } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { Video } from "./VideoApi";

export interface BackendProps {}

export const Backend: React.FC<BackendProps> = () => {
  const history = useHistory();
  const { data: videos, isLoading } = useQueryAllVideos();
  const [actualVideo, setActualVideo] = React.useState<Video | null>(null);
  const [showVideos, setShowVideos] = React.useState<boolean>(true);
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && history.push("/login")}
      <BackendLayout theme={showVideos}>
        <LeftSideScreen theme={showVideos}>
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
        <OpenVideoList onClick={() => setShowVideos(!showVideos)}>
          {showVideos ? (
            <>
              Hide Content
              <DoubleRightOutlined style={{ marginLeft: 20 }} />
            </>
          ) : (
            <>
              Course Content
              <DoubleLeftOutlined style={{ marginLeft: 20 }} />
            </>
          )}
        </OpenVideoList>
        <RightSideScreen theme={showVideos}>
          <List
            header={<h3>Course Content</h3>}
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
  margin: 0 auto;
  padding: 0 0em;
  min-height: 100vh;
  background-color: white;
  display: grid;
  justify-content: flex;
  align-items: flex-start;
  ${({ theme }) =>
    theme !== true
      ? "grid-template-columns: 100%; grid-template-areas: 'video' 'transcription';"
      : "grid-template-columns: 75% 25%;grid-template-areas: 'video .' 'transcription .'"};
  grid-template-rows: auto auto;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto 500px;
  }
`;

const LeftSideScreen = styled.div`
  background-color: black;
  grid-area: video;
  width: 100%;
  min-height: ${({ theme }) => (theme === true ? "60vh" : "80vh")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  h2 {
    color: white;
  }
`;

const RightSideScreen = styled.div`
  width: 25vw;
  position: absolute;
  top: 50px;
  right: 0;
  height: 100%;
  transform: ${(props) =>
    props.theme === true ? "translateX(0)" : "translateX(100vw)"};
  transition: all 500ms ease-in-out;
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

const OpenVideoList = styled(PrimaryButton)`
  position: fixed;
  top: 0px;
  right: 0px;
  padding: 5px 10px;
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
