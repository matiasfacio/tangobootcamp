import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useQueryUser } from "../util/useQueryUser";
import { Table } from "antd";
// require("dotenv").config();
import { UpdateUserInformation } from "./UpdateUserInformation";
import { CoursesAvailable } from "./types";

const AccountInformation = () => {
  const { user } = useAuth0();
  const { data, isLoading, isSuccess, isError } = useQueryUser(user);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const columns = [
    {
      title: "Course",
      dataIndex: "course_id",
      key: "course_id",
      width: "300px",
      render: (field) => {
        const courseFounded = CoursesAvailable.find(
          (course) => course.id === field
        );
        return <div key={field}>{courseFounded?.name}</div>;
      },
    },
  ];

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error fetching data</h3>;
  }

  return (
    <>
      <WelcomeMessage>
        Hey
        <span
          style={
            data?.name ? { textTransform: "capitalize" } : { display: "none" }
          }
        >
          {", " + data?.name}
        </span>
        , here you can update your contact information and see the courses you
        own.
      </WelcomeMessage>
      {isSuccess && (
        <AccountSettingsContainer>
          <Settings>
            <UpdateUserInformation user={data} />
            <CoursesContainer>
              <Title>
                <h3>Courses</h3>
              </Title>
              <Table dataSource={data.courses} columns={columns}></Table>
            </CoursesContainer>
          </Settings>
        </AccountSettingsContainer>
      )}
    </>
  );
};

export default AccountInformation;

const AccountSettingsContainer = styled.section`
  min-height: 100vh;
  max-width: 800px;
  background-color: var(--white);
  margin: 0px auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const CoursesContainer = styled.div`
  color: var(--white);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 2px;
  padding: 20px;
`;

const Settings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const WelcomeMessage = styled.div`
  margin-top: 70px;
  width: 100%;
  padding: 20px 2vw;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  background-color: rgba(134, 134, 134, 0.1);
`;
