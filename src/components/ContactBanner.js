import { React, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import AOS from 'aos';
import "aos/dist/aos.css";

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    <ContactBannerStyles data-aos='fade-up' data-aos-delay='100'>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Interested in working together?</PText>
          <h3 className="contactBanner__heading">Or do you just want to chat?</h3>
          <Button btnText="Contact Me" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
