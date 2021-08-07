import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useQueryUser } from "../util/useQueryUser";
import { Table, Tag } from "antd";
// require("dotenv").config();
import { UpdateUserInformation } from "./UpdateUserInformation";

export const AccountInformation = () => {
  const { user } = useAuth0();
  const { data, isLoading, isSuccess, isError } = useQueryUser(user);

  const columns = [
    {
      title: "Course",
      dataIndex: "name",
      width: "300px",
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "120px",
      render: (field) => {
        return (
          <Tag
            style={
              field === "approved"
                ? {
                    backgroundColor: "green",
                    color: "white",
                  }
                : {
                    backgroundColor: "red",
                    color: "white",
                  }
            }
          >
            {field}
          </Tag>
        );
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
