import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useQueryUser } from "../util/useQueryUser";
import { useHistory } from "react-router-dom";
import { Card, Modal } from "antd";
import siluette from "../images/siluette.png";
import { PrimaryButton } from "../components/UIComponents/PrimaryButton";
import { SecondaryButton } from "../components/UIComponents/SecondaryButton";
import { CartContext } from "../contexts/CartContext";
import { Course, CoursesAvailable } from "./types";

export type Currency = "eur" | "usd";

const { Meta } = Card;
export const Courses = () => {
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();
  const { data, isSuccess } = useQueryUser(user);
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [modalPurchaseVisibility, setModalPurchaseVisibility] =
    React.useState(false);
  const { addProductToCart, error, handleError } =
    React.useContext(CartContext);

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
    if (!error) {
      setModalPurchaseVisibility(true);
    }
  };

  return (
    <CoursesSection>
      <CoursesList>
        {isAuthenticated &&
          isSuccess &&
          CoursesAvailable.map((course) => {
            return (
              <Card
                key={course.name + course.id}
                title={`${course.name}`}
                cover={
                  <img
                    src={siluette}
                    alt="course"
                    width="200px"
                    height="300px"
                  />
                }
                hoverable
                style={{
                  margin: 20,
                  cursor: "pointer",
                  flexBasis: "300px",
                  flexGrow: 0,
                  flexShrink: 0,
                }}
                onClick={() =>
                  (checkCourseAvailable(course) || course.value === 0) &&
                  history.push(`/course/${course.id}`)
                }
              >
                {" "}
                <Meta title={course.name} description="Your bootcamp" />
                {checkCourseAvailable(course) || course.value === 0 ? (
                  <>
                    <PrimaryButton
                      style={{ width: "100%", margin: "10px 0" }}
                      onClick={() => history.push("/course")}
                    >
                      {course.value === 0 ? "Free" : "Learn"}
                    </PrimaryButton>
                  </>
                ) : (
                  <>
                    <>
                      <PrimaryButton
                        style={{ margin: "10px 0px", width: "100%" }}
                        onClick={() => {
                          handleAddCourseToCart(course);
                        }}
                      >
                        Purchase
                      </PrimaryButton>
                    </>
                    <SecondaryButton style={{ width: "100%" }}>
                      Preview
                    </SecondaryButton>
                  </>
                )}
              </Card>
            );
          })}
      </CoursesList>
      <Modal
        visible={modalVisibility}
        title="Access"
        footer={
          <PrimaryButton onClick={() => setModalVisibility(false)}>
            Ok
          </PrimaryButton>
        }
        onCancel={() => setModalVisibility(false)}
      >
        You don't have access to this course. The status is 'pending payment'.
        If you think that there is problem, please contact us!
      </Modal>
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
          <PrimaryButton onClick={() => setModalPurchaseVisibility(false)}>
            Ok
          </PrimaryButton>
        }
      >
        The course was added to your cart
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
  display: flex;
  max-width: 1200px;
  justify-content: center;
  flex-wrap: wrap;
`;
