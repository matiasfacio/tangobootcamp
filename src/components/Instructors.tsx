import * as React from "react";
import javier from "../images/javier-antar.jpg";
import matias from "../images/matias-facio2.jpg";
import styled from "styled-components";

export interface InstructorsProps {}

const Instructors: React.FunctionComponent<InstructorsProps> = () => {
  return (
    <InstructorsSection id="instructors">
      <Title>
        <h2>Meet the Instructors</h2>
      </Title>
      <InstructorsContainer>
        <Instructor>
          <ProfileImage src={matias} alt="matias-facio" />
          <div className="name">
            <h2>Matias Facio</h2>
            <div className="rol">
              <h3>Creator / Instructor</h3>
            </div>
            <div className="description">
              <p>
                I started dancing Tango back in Argentina in 1995 a the age of
                16. Since the moment I started it, I completely inmersed myself
                into it. <br />I began teaching Tango quite early, already in
                1998 for children of a dance accademy, and short later for
                adults as well. <br />I have taught in many studios in Buenos
                Aires, I have traveled the world widely, from Vancouver, Canada,
                to Tokyo, Japan, teaching and performing Argentine Tango. <br />
                I have danced Tango Escenario, Milonguero, Nuevo, and what is
                now wrongly called Salon or Traditional.
                <br />
                Today, I can proudly say that my style is <span>
                  unique.
                </span>{" "}
                <br />
                <br />I believe the reason for having my own style is to having
                understood how the tango structure works.
                <br />
                <span>
                  Join us in the Tango Structure Bootcamp, and let us help you
                  to find your own style.
                </span>
              </p>
            </div>
          </div>
        </Instructor>
        <Instructor>
          <ProfileImage src={javier} alt="javier-antar" />
          <div className="name">
            <h2>Javier Antar</h2>
            <div className="rol">
              <h3>Creator / Instructor</h3>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat voluptatem itaque iure esse soluta laboriosam alias
                consectetur laudantium ab, voluptas porro, suscipit, voluptates
                optio inventore. Maiores officia consequatur iure laborum
                similique eius necessitatibus enim velit quisquam doloribus,
                dolor nostrum molestias magni? Ducimus quas fugiat reprehenderit
                itaque sit eos omnis possimus non architecto soluta inventore
                totam, praesentium fugit eveniet quo ullam quibusdam aperiam
                aspernatur optio porro repellendus quam ipsa suscipit. Incidunt
                debitis facere sit, veritatis reps ipsum dicta, quis velit rem
                inventore sunt perspiciatis facere? Odit magni aperiam ipsum
                dolorem non id obcaecati nobis.
              </p>
            </div>
          </div>
        </Instructor>
      </InstructorsContainer>
    </InstructorsSection>
  );
};

export default Instructors;

const Title = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    font-size: 2.5rem;
    color: #292929;
    text-transform: uppercase;
    text-align: center;
  }
`;

const InstructorsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 2em;
  span {
    background-color: var(--pink);
    color: white;
    padding: 0 10px;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px rgb(81, 145, 145) solid;
  box-shadow: $box-shadow;
`;

const Instructor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 2vw;
  width: 400px;
  .name {
    h2 {
      font-size: 1.5rem;
      padding: 20px 0;
      color: #292929;
      text-transform: uppercase;
    }
    .description {
      max-width: auto;
    }
    .rol {
      h3 {
        padding: 0px 0px 10px 0px;
        color: rgb(247, 126, 126);
      }
    }
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const InstructorsSection = styled.section`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 100px auto;
`;
