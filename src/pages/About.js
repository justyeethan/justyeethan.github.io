import { React, useEffect } from "react";
import styled from "styled-components";
import PText from "../components/PText";
import ResumeButton from "../components/resumeButton";
import AboutImg from "../assets/images/about-page-img.jpg";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";
import Experience from "../components/Experience";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
    .language {
      font-size: 1.5rem;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      width: 100%;
      height: 600px;
      object-position: 0 50%;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div data-aos="fade-up" data-aos-delay="300" className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, my name is <span>Ethan Yee</span>
                <span>(余泽恩)</span>
              </p>
              <h2 className="about__heading">
                Junior @ the University of Washington
              </h2>
              <div className="about__info">
                <PText>
                  I was born in California, and raised in Seattle. I am a junior
                  studying Applied Computing (Computer Science) in Data Science
                  at the University of Washington, Bothell campus. I have always
                  loved figuring out trends of data and how they can be used to
                  make better decisions in a data-driven world.
                  <br /> <br />
                  I am currently working at Apple as an Engineering Intern
                  working on data pipeline for Daisy, developing synthetic data
                  for training Convolutional Neural Networks, and developing a
                  fullstack application for WW Operations. I have always loved
                  working on environmental efforts, and I someday want to use my
                  skills in computer science and data science to ultimately help
                  the environment and make technology easier to access.
                  <br />
                  <br />I am a big fan of utilizing statistics and machine
                  learning to solve complicated and dynamic problems, and I am
                  always looking to learn more about the world of data science
                  by improving my skills in data science and data analytics.
                </PText>
              </div>
              <ResumeButton btnText="See Resume" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="about__info__item"
            >
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={["University of Washington"]}
              />
              <AboutInfoItem
                title="Degree"
                items={["Applied Computing (Computer Science)", "Data Science"]}
              />
              <AboutInfoItem
                title="Clubs"
                items={[
                  "Trickfire Robotics",
                  "Hong Kong Student Association",
                  "HackRover",
                ]}
              />
              <br />
              <AboutInfoItem
                title="Research"
                items={[
                  "Stanford Artificial Intelligence Laboratory",
                  "Paul Allen School @ UW",
                  "Sensors, Energy, and Automation Laboratory",
                ]}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="about__info__item"
            >
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={["HTML", "CSS", "JavaScript", "React.js"]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={["Python", "Node.js", "C++", "Java"]}
              />
              <AboutInfoItem
                title="Data Science"
                items={["MatLab", "R", "iPython", "Tableau"]}
              />
              <AboutInfoItem
                title="Concepts"
                items={["Regression Analysis", "Probability", "Statistics"]}
              />
              <AboutInfoItem
                title="Toolkit"
                items={["Docker", "Excel", "Unix/Linux", "Git"]}
              />
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="about__info__heading"
            >
              Experience
            </h1>
            <br />
            <Experience />
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
