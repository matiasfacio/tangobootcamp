import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useQueryUser } from "../util/useQueryUser";
import { useHistory } from "react-router-dom";
import { Card, Modal } from "antd";
import siluette from "../images/siluette.png";
import { PrimaryButton } from "../components/UIComponents/PrimaryButton";

const { Meta } = Card;
export const Courses = () => {
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();
  const { data, isSuccess } = useQueryUser(user);
  const [modalVisibility, setModalVisibility] = React.useState(false);

  return (
    <CoursesSection>
      {isAuthenticated && isSuccess && data.courses?.length > 0 ? (
        data.courses.map((course, index) => {
          return (
            <Card
              key={course}
              title={`Course ${index + 1} (${course.status})`}
              headStyle={
                course.status === "approved"
                  ? { backgroundColor: "green", color: "white" }
                  : { backgroundColor: "red", color: "white" }
              }
              cover={
                <img src={siluette} alt="course" width="200px" height="300px" />
              }
              style={{ margin: 20, cursor: "pointer" }}
              onClick={() =>
                course.status === "approved"
                  ? history.push("/course")
                  : setModalVisibility(true)
              }
            >
              {" "}
              <Meta title={course.name} description="Your bootcamp" />
              Access to your course here
            </Card>
          );
        })
      ) : (
        <div>No Courses</div>
      )}
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
        You don't have access to this course. The status is 'on review'. If you
        think that there is problem, please contact us!
      </Modal>
    </CoursesSection>
  );
};

const CoursesSection = styled.section`
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
