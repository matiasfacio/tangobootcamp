import * as React from "react";
import { Card, Col, Row } from "antd";
import styled from "styled-components";

export interface TheBootCampProps {}

const TheBootCamp: React.FunctionComponent<TheBootCampProps> = () => {
  const headStyles = {
    fontSize: "1.3rem",
    fontWeight: 300,
    fontFamily: "serif",
  };

  return (
    <Section id="what-is">
      <div className="section-title">
        <h2>
          What is The Tango <br /> Structure Bootcamp ?
        </h2>
        <h3>( and why you should join! )</h3>
      </div>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col span={8} xs={24} sm={16} md={12} xl={8}>
          <CardStyle title="Content" size="small" headStyle={headStyles}>
            <ul>
              <li>
                <p>
                  <span>40+</span> Videos
                  <b> with Theorie and Exercises.</b>
                </p>
              </li>
              <li>
                <p>
                  The program includes one hour consultancy with one of the
                  teacher.
                </p>
              </li>
              <li>
                <p>
                  We have also prepared <span>Homework</span> for you to better
                  understand the concepts!
                </p>
              </li>
            </ul>
          </CardStyle>
        </Col>
        <Col span={8} xs={24} sm={16} md={12} xl={8}>
          <CardStyle title="Who are you ?" size="small" headStyle={headStyles}>
            <ul>
              <li>
                <p>
                  Either you are an <span>INSTRUCTOR</span> looking for
                  deeppening into the fundamentals, or you are looking for
                  becoming a <span>PRO</span> or you are a truly Tango{" "}
                  <span>LOVER.</span>
                </p>
              </li>
              <li>
                <p>
                  Your level is not a limitation! This bootcamp was created to
                  be accesible for everyone in any level!
                </p>
              </li>
            </ul>
          </CardStyle>
        </Col>
        <Col span={8} xs={24} sm={16} md={12} xl={8}>
          <CardStyle title="Certificates" size="small" headStyle={headStyles}>
            <ul>
              <li>
                <p>
                  <span>Attendance Certificate</span> to
                  <b> The Tango's Structure Bootcamp.</b>
                </p>
              </li>
              <li>
                <p>
                  Optional: get a Certificate of <span>Approval</span> of
                  <b> The Tango's Structure Bootcamp Program.</b>
                </p>
              </li>
            </ul>
          </CardStyle>
        </Col>
      </Row>
    </Section>
  );
};

export default TheBootCamp;

const Section = styled.section`
  background-color: var(--body-bg-color);
  padding: 20px 2em;
  margin: 0px auto;
  min-height: calc(100vh + 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .section-title {
    min-height: 10vh;
    padding-bottom: 10px;
    position: relative;
    h2 {
      font-size: 2.5rem;
      color: white;
      text-transform: uppercase;
      text-align: center;
    }
    h3 {
      color: white;
      font-size: 1.4rem;
      text-align: center;
      font-weight: 400;
      text-align: center;
    }
  }
`;

const CardStyle = styled(Card)`
  margin-top: 50px;
  min-height: 320px;
  max-width: 320px;
  overflow-y: hidden;
  cursor: pointer;
  border-bottom: 3px var(--pink) solid;
  border-top-right-radius: 20px;

  ul {
    list-style: none;
  }
  span {
    color: var(--pink);
    font-weight: 700;
  }
  .ant-card-head {
    border-bottom: 2px var(--black) solid;
  }
  .ant-card-head {
    border-bottom: none;
    position: relative;
    &::after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: var(--black);
      bottom: 0;
      left: 0;
      position: absolute;
      transform: scale(1);
      transition: transform 500ms ease;
      transform-origin: left;
    }
  }
`;
