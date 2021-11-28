import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styled from "styled-components";

const ExperienceStyled = styled.div`
  .timeline ul {
    border-left: 4px solid #ececec;
    border-radius: 0.8rem;
    background-color: rgba(0, 0, 0, 0.05);
    margin: 0 auto;
    position: relative;
    padding: 5rem;
    list-style: none;
    text-align: left;
    width: 70%;
  }

  .timeline h1 {
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  .timeline h6 {
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  .timeline p {
    font-size: 1.3rem;
  }

  .timeline .date {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    position: relative;
  }
  .timeline .date:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
  }

  .timeline .date::before,
  .timeline .date::after {
    position: absolute;
    display: block;
    top: 50%;
    transform: translateY(-50%);
  }

  .timeline .date::before {
    content: attr(data-date);
    left: -24rem;
    text-align: right;
    min-width: 12rem;
    font-size: 1.5rem;
  }

  .timeline .date::after {
    content: "";
    // box-shadow: 0 0 0 4px #1b9ed1;
    box-shadow: 0 0 0 4px #656161;
    border-radius: 100%;
    left: -6rem;
    height: 1.5rem;
    width: 1.5rem;
    background-color: #313534;
  }

`;

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <ExperienceStyled>
      <div data-aos='fade-up' className="timeline">
        <ul>
          <li className="date">
            <span data-date="2019-01-01">
              <h2>Sep. 2021 - Present</h2>
              <h1>Engineer Intern</h1>
              <h6>Apple</h6>
              <p>
                I created and maintained a machine learning models and organized
                the data for the company's internal machine learning team.
              </p>
            </span>
          </li>
          <li className="date">
            <span data-date="2019-01-01">
              <h2>Jun. 2021 - Sep. 2021</h2>
              <h1>Software Engineer Intern</h1>
              <h6>Apple</h6>
              <p>
                I developed internal tools that assisted in iOS development and
                maintained project structure and planning with other interns on
                my team.
              </p>
            </span>
          </li>
          <li className="date">
            <span data-date="2019-01-01">
              <h2>Jan. 2021 - Jun. 2021</h2>
              <h1>Undergrad Research Assistant</h1>
              <h6>Sensors, Energy, and Automation Laboratory</h6>
              <p>
                I helped automate and create Machine learning bots to aid with
                laboratory processes and conducted research on AI and aided in
                Development Operations of the laboratory.
              </p>
            </span>
          </li>
          <li className="date">
            <span data-date="2019-01-01">
              <h2>Jan. 2021 - Apr. 2021</h2>
              <h1>Software Engineer Freelancer</h1>
              <h6>Self Employed</h6>
              <p>
                I created responsive websites and applications for local
                businesses during COVID-19, and I set up web applications for
                customers to create orders.
              </p>
            </span>
          </li>
          <li className="date">
            <span data-date="2019-01-01">
              <h2>Sep. 2020 - Jan. 2021</h2>
              <h1>Fullstack Developer (Team Lead)</h1>
              <h6>Sensors, Energy, and Automation Laboratory</h6>
              <p>
                I was responsible for leading other front-end and back-end
                developers in developing different websites using React.js,
                Node.js, and AWS Amplify.
              </p>
            </span>
          </li>
          <li className="date">
            <span data-date="2019-01-01">
              <h2>Sep. 2020 - Dec. 2020</h2>
              <h1>Software Engineer Intern</h1>
              <h6>PayPal Holdings</h6>
              <p>
                I created a dashboard for transactions and pending payments to
                help counteract fraudulant transactions and for the end user to
                understand their spending.
              </p>
            </span>
          </li>
          <li className="date">
            <span data-date="2019-01-01">
              <h2>Jun. 2020 - Aug. 2020</h2>
              <h1>Software Engineer Intern</h1>
              <h6>Microsoft Inc.</h6>
              <p>
                I managed and ensured secure systems on the Windows Security
                Team at Microsoft. I also developed a data pipeline that logged
                windows error and breach systems for internal use.
              </p>
            </span>
          </li>
          <li className="date">
            <span data-date="2019-01-01">
              <h2>Sep. 2019 - Mar. 2020</h2>
              <h1>Computer Science & Engineering Tutor</h1>
              <h6>University of Washington</h6>
              <p>
                I provided supplimental support to struggling students in CSE
                342/343/421 (Algorithm-centered classes). I also aided in
                developing new course curriculum for the University of
                Washington.
              </p>
            </span>
          </li>
          <li className="date">
            <span data-date="2019-01-01">
              <h2>Jun. 2019 - Mar. 2020</h2>
              <h1>Student Assistant (Technical Support)</h1>
              <h6>University of Washington</h6>
              <p>
                I helped manage and present data and information that would help
                with parking enforcement and analyzed millions of dollars worth
                of inventory using Python and Excel, while providing excellent
                customer service to students and staff.
              </p>
            </span>
          </li>
        </ul>
      </div>
    </ExperienceStyled>
  );
}
