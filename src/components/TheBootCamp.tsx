import * as React from "react";

export interface TheBootCampProps {}

const TheBootCamp: React.FunctionComponent<TheBootCampProps> = () => {
  return (
    <section id="what-is">
      <div className="section-title">
        <h2>
          What is Tango <br /> Structure Bootcamp ?
        </h2>
        <h3>( and why you should join! )</h3>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="card-title">
            <h3>Assisted Virtual Learning</h3>
          </div>
          <div className="card-content">
            <ul>
              <li>
                <p>
                  <b>Full Online Learning and Training System</b> developed
                  specially for Tango lovers!
                </p>
              </li>
              <li>
                <p>
                  Either you are a <span>INSTRUCTOR</span> looking for
                  deeppening into the fundamentals, or you are looking for
                  becoming a <span>PRO</span> or you are a truly Tango{" "}
                  <span>LOVER.</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <h3>Content</h3>
          </div>
          <div className="card-content">
            <ul>
              <li>
                <p>
                  <span>40+</span> Videos with <span>200+</span>
                  <b>Minutes of Theorie and Exercises.</b>
                </p>
              </li>
              <li>
                <p>
                  The program includes one hour consultancy with one of the
                  teacher per week.
                </p>
              </li>
              <li>
                <p>You will learn a Tango Notation System.</p>
              </li>
              <li>
                <p>
                  Lot of <span>Homework.</span>
                </p>
              </li>
              <li>
                <p>One Final Project.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <h3>Certificates</h3>
          </div>
          <div className="card-content">
            <ul>
              <li>
                <p>
                  One <span>Attendance Certificate</span> to
                  <b>The Tango's Structure Bootcamp.</b>
                </p>
              </li>
              <li>
                <p>
                  Optional: get Certificate of <span>Approval</span> of
                  <b>The Tango's Structure Bootmcamp Program.</b>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheBootCamp;
