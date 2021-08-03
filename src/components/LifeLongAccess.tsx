import React from "react";
import styled from "styled-components";

function LifeLongAccess() {
  return (
    <LifeLongAccessStyle>
      <h2>
        As long as this project exists, we offer you{" "}
        <span>life long access</span> to the program. <br />
        The content will be constantly upgraded, and you will have access to all
        the newly added videos and homework
        <br /> <span>without having to pay extra!</span>
      </h2>
    </LifeLongAccessStyle>
  );
}

export default LifeLongAccess;

const LifeLongAccessStyle = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  padding: 0 0em;
  max-width: 70vw;
  min-height: 70vh;
  border-top: 10px var(--black) dotted;
  border-bottom: 10px var(--black) dotted;
  h2 {
    color: $h1-font-color;
    font-size: $h2-font-size;
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
