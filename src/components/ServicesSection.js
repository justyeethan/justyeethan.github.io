import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faCode, faDatabase, faRobot, faTable, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faJava, faLinux, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Specialties" heading="Skills" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<FontAwesomeIcon icon={faChartBar} size='5x' />}
            title="Data Visualization"
            desc="I build comprehensive charts and tables for large datasets and variables"
          />
          <ServicesSectionItem
            icon={<FontAwesomeIcon icon={faCode} size='5x' />}
            title="Web Development"
            desc="I can manage your entire website, using anything, from your front-end, to your
            lower level api."
          />
          <ServicesSectionItem
            icon={<FontAwesomeIcon icon={faRobot} size="5x" />}
            title="Machine Learning"
            desc="I have extensive experience with developing neural networks for computer vision,
            with supervised and unsupervised learning."
          />
        </div>
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<FontAwesomeIcon icon={faDatabase} size='5x' />}
            title="Database Management (SQL, NoSQL)"
            desc="I have extensive experience in SQL and NoSQL databases, and I can help manage your 
            data pipeline."
          />
          <ServicesSectionItem
            icon={<FontAwesomeIcon icon={faTable} size='5x' />}
            title="Data Analysis & Statistics"
            desc="I have extensive knowledge of drawing statistical significance between variables
            using probability and statistical features."
          />
          <ServicesSectionItem
            icon={<FontAwesomeIcon icon={faLinux} size="5x" />}
            title="GNU/Linux & Dev Ops"
            desc="I have extensive experience with Linux distributions since I was a Freshman in high school,
            and I can deploy and maintain your server environments."
          />
        </div>
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<FontAwesomeIcon icon={faPython} size='5x' />}
            title="Python"
            desc="I have been programming with Python since middle school, and I have build everything from games to high level APIs and data pipelines."
          />
          <ServicesSectionItem
            icon={<FontAwesomeIcon icon={faJava} size='5x' />}
            title="Java"
            desc="I am experienced with Java and Android application development for the last 2 years, and I can build a scalable backend in Java."
          />
          <ServicesSectionItem
            icon={<FontAwesomeIcon icon={faReact} size="5x" />}
            title="React"
            desc="I have been a Full-stack Developer using React.js for my front-end for the last year, and I can build you an intuitive design."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
