import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "./ContactForm";
import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
  }
`;

export default function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <ContactSectionStyle data-aos="fade-up" data-aos-delay='500'>
      <div className="container">
        <SectionTitle heading="contact" subheading="How to reach me" />
        <div className="contactSection__wrapper">
          <div className="left">
            <a target="_blank" href="mailto:theethan5753@gmail.com">
              <ContactInfoItem
                icon={<MdEmail />}
                text="theethan5753@gmail.com"
              />
            </a>
            <a target="_blank" href="https://goo.gl/maps/qJxEHgubn3CqSg8s8">
              <ContactInfoItem text="Seattle, Washington" />
            </a>
          </div>
          <div className="right">
            <a target="_blank" href="https://www.instagram.com/yeeitsethan/">
              <ContactInfoItem
                icon={<FontAwesomeIcon icon={faInstagram} size="3x" />}
                text="yeeitsethan"
              />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ethan-yee/">
              <ContactInfoItem
                icon={<FontAwesomeIcon icon={faLinkedin} size="3x" />}
                text="Ethan Yee"
              />
            </a>
            <a target="_blank" href="https://github.com/justyeethan">
              <ContactInfoItem
                icon={<FontAwesomeIcon icon={faGithub} size="3x" />}
                text="justyeethan"
              />
            </a>
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
