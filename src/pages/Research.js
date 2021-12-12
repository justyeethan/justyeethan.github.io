import { React, useEffect } from "react";
import styled from "styled-components";
import PText from "../components/PText";
import AboutImg from "../assets/images/about-page-img.jpg";
import SectionTitle from "../components/SectionTitle";
import SEAL from "../assets/images/SEALlogo.png";
import SAIL from "../assets/images/SAIL.png";
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
  .left {
    img {
      border: 2px solid var(--gray-1);
      width: 100%;
      height: 100%;
      object-position: 0 50%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      width: 100%;
      height: 100%;
      object-position: 0 50%;
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
          <SectionTitle
            heading="Research"
            subheading="Research I have done with established Institutions"
          />
          <div className="about__info__items">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="top-section"
            >
              <div className="left">
                <h2>University of Washington</h2>
                <h2 className="about__heading">
                  Sensors, Energy, and Automation Laboratory
                </h2>
                <div className="about__info">
                  <PText>
                    During my time at the University of Washington, I worked on
                    numerous research projects involving automation and
                    detection of calories on a plate, to help those who need to
                    watch their food intake.
                  </PText>
                </div>
              </div>
              <div className="right">
                <img src={SEAL} alt="me" />
              </div>
            </div>
          </div>
          <div className="about__info__items">
          <div data-aos="fade-up" data-aos-delay="300" className="top-section">
            <div className="left">
              <img src={SAIL} alt="me" />
            </div>
            <div className="right">
              <h2>Stanford University</h2>
              <h2 className="about__heading">
                Stanford Artificial Intelligence Laboratory
              </h2>
              <div className="about__info">
                <PText>
                  While at Stanford, I worked on projects to assist the 
                  Statistical Machine Learning Group. I was also involved in
                  the development of algorithmic processes for movement and 
                  surrounding detection for cheaper bionic arms.
                </PText>
              </div>
            </div>
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
