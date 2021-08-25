import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useQueryUser } from "../util/useQueryUser";
import { useHistory, Link } from "react-router-dom";
import { Card, Modal } from "antd";
import siluette from "../images/siluette.png";
import structure from "../images/structure.png";
import musicality from "../images/musicality.png";
import exercises from "../images/exercises.png";
import talkimprovisation from "../images/talkimprovisation.png";
import { PrimaryButton } from "../components/UIComponents/PrimaryButton";
import { SecondaryButton } from "../components/UIComponents/SecondaryButton";
import { CartContext } from "../contexts/CartContext";
import { Course, CoursesAvailable } from "./types";
import { VideoInterface } from "../components/UIComponents/VideoInterface";
import { VideoApi } from "./VideoApi";

export type Currency = "eur" | "usd";

const ShowPreview = ({ video }) => {
  const videoInformation = VideoApi.loadPreview(video);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <VideoInterface video={videoInformation} autoplay={false} />
      <div style={{ margin: "50px 0", maxWidth: 320 }}>
        <p>Snippet: {videoInformation.snippet}</p>
        <p>Description: {videoInformation.description}</p>
      </div>
    </div>
  );
};

const { Meta } = Card;

export const Courses = () => {
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();
  const { data, isSuccess } = useQueryUser(user);
  const [modalPreview, setModalPreview] = React.useState({
    preview: false,
    id: null,
  });
  const [modalPurchaseVisibility, setModalPurchaseVisibility] =
    React.useState(false);
  const { addProductToCart, error, handleError } =
    React.useContext(CartContext);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkCourseAvailable = (courseName: Course): boolean => {
    if (data.courses?.length === 0) {
      return false;
    }
    return data.courses?.some(
      (course: any) => courseName.id === course.course_id
    );
  };

  const handleAddCourseToCart = (course) => {
    addProductToCart(course);
    setModalPurchaseVisibility(true);
  };

  return (
    <CoursesSection>
      <WelcomeMessage>
        <h3>
          Welcome
          <span
            style={
              data?.name ? { textTransform: "capitalize" } : { display: "none" }
            }
          >
            {", " + data?.name}
          </span>
          .<br />
          Courses - Bootcamps - Lectures - Talks
        </h3>
      </WelcomeMessage>
      <CoursesList>
        {isAuthenticated &&
          isSuccess &&
          CoursesAvailable.map((course) => {
            return (
              <StyledCard
                theme={course.available ? "true" : "false"}
                key={course.name + course.id}
                cover={
                  <img
                    src={
                      course?.picture === "structure"
                        ? structure
                        : course?.picture === "musicality"
                        ? musicality
                        : course?.picture === "exercises"
                        ? exercises
                        : course?.picture === "talkimprovisation"
                        ? talkimprovisation
                        : siluette
                    }
                    alt="course"
                    width="200px"
                    height="300px"
                  />
                }
                hoverable
                onClick={() =>
                  (checkCourseAvailable(course) || course.value === 0) &&
                  history.push(`/course/${course.id}`)
                }
              >
                {" "}
                <Meta title={course.name} description="Your bootcamp" />
                {checkCourseAvailable(course) || course.value === 0 ? (
                  <>
                    <SecondaryButton
                      style={{ width: "100%", margin: "10px 0" }}
                      onClick={() => history.push("/course")}
                    >
                      {course.value === 0 ? "Free" : "Learn"}
                    </SecondaryButton>
                  </>
                ) : (
                  <>
                    <>
                      <SecondaryButton
                        style={{ margin: "10px 0px", width: "100%" }}
                        onClick={() => {
                          handleAddCourseToCart(course);
                        }}
                      >
                        Purchase
                      </SecondaryButton>
                    </>
                    <SecondaryButton
                      style={{ width: "100%" }}
                      onClick={() =>
                        setModalPreview({ preview: true, id: course.id })
                      }
                    >
                      Preview
                    </SecondaryButton>
                  </>
                )}
              </StyledCard>
            );
          })}
      </CoursesList>

      <Modal
        visible={!!error}
        title="Error"
        footer={<PrimaryButton onClick={() => handleError()}>Ok</PrimaryButton>}
        destroyOnClose
        onCancel={() => {
          handleError();
        }}
      >
        {error}
      </Modal>
      <Modal
        visible={modalPurchaseVisibility}
        title="Cart Information"
        footer={
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to="/cart">
              <SecondaryButton style={{ marginRight: 20 }}>
                Cart
              </SecondaryButton>
            </Link>
            <PrimaryButton onClick={() => setModalPurchaseVisibility(false)}>
              Ok
            </PrimaryButton>
          </div>
        }
      >
        The course was added to your cart
      </Modal>
      <Modal
        visible={modalPreview.preview}
        title="Video Preview"
        width={"100%"}
        destroyOnClose
        footer={
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <PrimaryButton
              onClick={() => setModalPreview({ preview: false, id: null })}
            >
              Close
            </PrimaryButton>
          </div>
        }
      >
        <ShowPreview video={modalPreview.id} />
      </Modal>
    </CoursesSection>
  );
};

const CoursesSection = styled.section`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CoursesList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 2vw;
`;

const StyledCard = styled(Card)`
  position: relative;
  margin: 20;
  cursor: pointer;
  flex-basis: 300px;
  flex-grow: 0;
  flex-shrink: 0;

  &::after {
    ${({ theme }) =>
      theme === "false" &&
      'content: "Coming soon!"; position: absolute; top: 20px; right: 20px;padding: 5px 10px; box-shadow: 1px 1px 5px rgba(0,0,0,0.5);background-color: red; color: white; font-size: 1rem;transform: rotateZ(350deg); transition: transform 250ms ease-in-out'}
  }
  &:hover::after {
    transform: rotateZ(380deg);
  }
`;

const WelcomeMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 2vw;
`;
