import { React, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/images/about-sec-img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .aboutImg {
    width: 100%;
    height: 10%;
    overflow: hidden;
    object-position: 20% 0%;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    // Border:
    border: 2px solid rgb(173, 173, 173);
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ 
      duration: 2000,
      once: true
    });
  }, []);
  return (
    <AboutSectionStyles data-aos="fade-up" data-aos-delay='100'>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            I am a University of Washington student currently working as a
            Engineering Intern at Apple. I have a passion for technology and am
            always looking to improve my skills in data science and data
            analytics. I have a strong background in statistics and machine
            learning and am always looking to learn more about the world of data
            science.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Projects" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
