import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import experience from "../assets/data/experience";

import styled from "styled-components";
import projects from "../assets/data/projects";

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
      once: true,
    });
  }, []);
  return (
    <ExperienceStyled>
      <div data-aos="fade-up" data-aos-delay="500" className="timeline">
        <ul>
          {experience.map((exp, index) => {
            return (
              <li className="date">
                <span className={`job_id_${index}`}>
                  <h2>{exp.date}</h2>
                  <h1>{exp.title}</h1>
                  <h6>{exp.company}</h6>
                  <p>{exp.desc}</p>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </ExperienceStyled>
  );
}
