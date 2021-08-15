import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useQueryUser } from "../util/useQueryUser";
import { Table } from "antd";
// require("dotenv").config();
import { UpdateUserInformation } from "./UpdateUserInformation";
import { CoursesAvailable } from "./types";

export const AccountInformation = () => {
  const { user } = useAuth0();
  const { data, isLoading, isSuccess, isError } = useQueryUser(user);

  const columns = [
    {
      title: "Course",
      dataIndex: "course_id",
      width: "300px",
      render: (field) => {
        const courseFounded = CoursesAvailable.find(
          (course) => course.id === field
        );
        return <div>{courseFounded?.name}</div>;
      },
    },
  ];

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error fetching data</h2>;
  }

  return (
    <>
      {isSuccess && (
        <AccountSettingsContainer>
          <Settings>
            <UpdateUserInformation user={data} />
            <CoursesContainer>
              <Title>Courses</Title>
              <Table dataSource={data.courses} columns={columns}></Table>
            </CoursesContainer>
          </Settings>
        </AccountSettingsContainer>
      )}
    </>
  );
};

const AccountSettingsContainer = styled.section`
  min-height: 100vh;
  max-width: 800px;
  background-color: var(--white);
  margin: 50px auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  color: var(--black);
  font-family: "Fira Sans", sans-serif;
  font-size: 1.5rem;
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
