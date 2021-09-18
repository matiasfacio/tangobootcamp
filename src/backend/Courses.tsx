import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useQueryUser } from "../util/useQueryUser";
import { useHistory, Link } from "react-router-dom";
import { Card, Modal } from "antd";
import siluette from "../images/siluette.png";
import structure from "../images/tangostructurebootcamp1.svg";
import musicality from "../images/tangomusicalitybootcamp1.svg";
import exercises from "../images/Exercises1.svg";
import talkimprovisation from "../images/tangotalkimprovisation1.svg";
import { PrimaryButton } from "../components/UIComponents/PrimaryButton";
import { SecondaryButton } from "../components/UIComponents/SecondaryButton";
import { CartContext } from "../contexts/CartContext";
import { Course, CoursesAvailable } from "./types";
import { VideoInterface } from "../components/UIComponents/VideoInterface";
import { VideoApi } from "./VideoApi";

export type Currency = "eur" | "usd";

const DuplicatedItemModal = ({
  visible,
  onOk,
}: {
  visible: boolean;
  onOk: () => void;
}) => {
  return (
    <Modal
      visible={visible}
      title="Duplicated Item"
      footer={<PrimaryButton onClick={() => onOk()}>Ok</PrimaryButton>}
      destroyOnClose
    >
      You had this item already in your cart.
    </Modal>
  );
};

const CourseAddedModal = ({
  visible,
  onOk,
}: {
  visible: boolean;
  onOk: () => void;
}) => {
  return (
    <Modal
      visible={visible}
      title="Cart Information"
      footer={
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to="/cart">
            <SecondaryButton style={{ marginRight: 20 }}>Cart</SecondaryButton>
          </Link>
          <PrimaryButton onClick={() => onOk()}>Ok</PrimaryButton>
        </div>
      }
    >
      The course was added to your cart
    </Modal>
  );
};

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

const PreviewModal = ({
  visible,
  id,
  onClose,
}: {
  visible: boolean;
  id: number;
  onClose: () => void;
}) => {
  return (
    <Modal
      visible={visible}
      title="Video Preview"
      style={{ maxWidth: 1200 }}
      width={"clamp(320px, 100%, 1200px)"}
      onCancel={() => onClose()}
      destroyOnClose
      footer={
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <PrimaryButton onClick={() => onClose()}>Close</PrimaryButton>
        </div>
      }
    >
      <ShowPreview video={id} />
    </Modal>
  );
};

const { Meta } = Card;

const Courses = () => {
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();
  const { data, isSuccess } = useQueryUser(user);
  const [modalPreview, setModalPreview] = React.useState({
    preview: false,
    id: null,
  });
  const [modalPurchaseVisibility, setModalPurchaseVisibility] =
    React.useState(false);
  const { cart, addProductToCart } = React.useContext(CartContext);
  const [isDuplicated, setIsDuplicated] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOkDuplicatedModal = () => {
    setIsDuplicated(false);
  };

  const handleModalPurchaseVisibility = () => {
    setModalPurchaseVisibility(false);
  };

  const handlePreviewClose = () => {
    setModalPreview({ preview: false, id: null });
  };

  const checkCourseAvailable = (courseName: Course): boolean => {
    if (data.courses?.length === 0) {
      return false;
    }
    return data.courses?.some(
      (course: any) => courseName.id === course.course_id
    );
  };

  const handleAddCourseToCart = (course) => {
    const findInCart = cart.find(
      (courseInCart) => courseInCart.id === course.id
    );
    if (!findInCart) {
      addProductToCart(course);
      setModalPurchaseVisibility(true);
    } else {
      setIsDuplicated(true);
    }
  };

  const returnPicture = (coursePicture: string) => {
    switch (coursePicture) {
      case "structure":
        return structure;
      case "musicality":
        return musicality;
      case "exercises":
        return exercises;
      case "talkimprovisation":
        return talkimprovisation;
      default:
        return siluette;
    }
  };

  return (
    <CoursesSection>
      <WelcomeMessage>
        Welcome
        <span
          style={
            data?.name ? { textTransform: "capitalize" } : { display: "none" }
          }
        >
          {", " + data?.name}
        </span>
        . Here you will find "The Tango Structure Bootcamp" and extra free
        content for you.
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
                    src={returnPicture(course?.picture)}
                    alt="course"
                    width="100%"
                    height="100%"
                  />
                }
                hoverable
                onClick={() =>
                  (checkCourseAvailable(course) || course.value === 0) &&
                  history.push(`/course/${course.id}`)
                }
              >
                {" "}
                <Meta title={course.name} description={course?.snippet} />
                {checkCourseAvailable(course) || course.value === 0 ? (
                  <>
                    <SecondaryButtonBoost
                      onClick={() => history.push("/course")}
                    >
                      {course.value === 0 ? "Free" : "Learn"}
                    </SecondaryButtonBoost>
                  </>
                ) : (
                  <>
                    <>
                      <SecondaryButtonBoost
                        onClick={() => {
                          handleAddCourseToCart(course);
                        }}
                      >
                        Purchase
                      </SecondaryButtonBoost>
                    </>
                    <SecondaryButtonBoost
                      onClick={() =>
                        setModalPreview({ preview: true, id: course.id })
                      }
                    >
                      Preview
                    </SecondaryButtonBoost>
                  </>
                )}
              </StyledCard>
            );
          })}
      </CoursesList>

      <DuplicatedItemModal
        visible={isDuplicated}
        onOk={handleOkDuplicatedModal}
      />
      <CourseAddedModal
        visible={modalPurchaseVisibility}
        onOk={handleModalPurchaseVisibility}
      />
      <PreviewModal
        visible={modalPreview.preview}
        id={modalPreview.id}
        onClose={handlePreviewClose}
      />
    </CoursesSection>
  );
};

export default Courses;

const CoursesSection = styled.section`
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1650px;
`;

const CoursesList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0 2vw;
`;

const StyledCard = styled(Card)`
  position: relative;
  cursor: pointer;
  margin-right: 20px;
  margin-bottom: 20px;
  flex-basis: clamp(300px, 40vw, 400px);
  flex-grow: 0;
  flex-shrink: 0;
  background-color: rgba(134, 134, 134, 0.1);
  border-bottom-right-radius: 50px;

  &::after {
    ${({ theme }) =>
      theme === "false" &&
      'content: "Coming soon!"; position: absolute; top: -10px; right: 0px;padding: 5px 10px; box-shadow: 1px 1px 5px rgba(0,0,0,0.5);background-color: red; color: white; font-size: 1rem;transform: rotateZ(350deg); transition: transform 250ms ease-in-out'}
  }
  .ant-card-cover {
    margin: 0;
    padding: 0;
  }

  .ant-card-body {
    display: flex;
    flex-direction: column;
    & > button {
      align-self: center;
    }
    & .ant-card-meta-description {
      color: var(--black) !important;
      margin-bottom: 20px;
    }
  }
`;

const WelcomeMessage = styled.div`
  width: 100vw;
  padding: 20px 2vw;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  background-color: rgba(134, 134, 134, 0.1);
`;

const SecondaryButtonBoost = styled(SecondaryButton)`
  width: 100%;
  margin-top: 10px;
`;
