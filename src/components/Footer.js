import { React, useEffect } from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    <FooterStyle data-aos='flip-left' data-aos-delay='500'>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Ethan Yee</h1>
          <PText>
              Currently a student at the University of Washington, studying
              Applied Computing and Data Science. I am working on strengthening
              my skills in data science and machine learning.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+1 (425) 350-3819',
                path: 'tel:425-350-3819',
              },
              {
                title: 'theethan5753@gmail.com',
                path: 'mailto:theethan5753@gmail.com',
              },
              {
                title: 'Seattle, Washington',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/ethan-yee/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/justyeethan',
              },
              {
                title: 'Instagram',
                path: 'https://instagram.com/yeeitsethan',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Ethan Yee
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
