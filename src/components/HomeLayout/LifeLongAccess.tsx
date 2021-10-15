import React from "react";
import styled from "styled-components";

function LifeLongAccess() {
  return (
    <MainLLContainer>
      <LifeLongAccessStyle>
        <h2>
          As long as this project exists, we offer you{" "}
          <span>life long access</span> to the program. <br />
          The content will be constantly upgraded, and you will have access to
          all the newly added videos and homework
          <br /> <span>without having to pay extra!</span>
        </h2>
      </LifeLongAccessStyle>
    </MainLLContainer>
  );
}

export default LifeLongAccess;

const MainLLContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--body-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LifeLongAccessStyle = styled.div`
  background-color: var(--body-bg-color);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0px 0em;
  max-width: 1500px;
  min-height: 50vh;
  border-top: 10px var(--white) dotted;
  border-bottom: 10px var(--white) dotted;
  h2 {
    color: var(--white);
    line-height: 2;
  }
  span {
    color: var(--white);
    background-color: var(--pink);
    font-size: 2.5rem;
    padding: 5px 10px;
    border-radius: 2px;
  }
`;
