import styled from "styled-components";
import {
  SiLinkedin,
  SiGithub,
  SiX,
  SiInstagram,
  SiYoutube,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { personalInfo } from "../../data/data";

const StyledFooter = styled.footer`
  background: linear-gradient(135deg, #10041c, #2c1a4a);
  color: #ffffff;
  padding: 4rem;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  .footer-content {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }

  .footer-section {
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #a453f5;
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.8);
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.75rem;

        @media screen and (max-width: 768px) {
          font-size: 1.3rem;
          margin-bottom: 0.3rem;
        }

        a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: #a453f5;
          }
        }
      }
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1.5rem;

    a {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.5rem;
      transition: color 0.3s ease, transform 0.3s ease;

      &:hover {
        color: #a453f5;
        transform: translateY(-5px);
      }
    }
  }

  .footer-bottom {
    margin-top: 2rem;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1rem;
    width: 100%;

    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #a453f5;
      }
    }
  }
`;

const Footer = () => {
  const { email, location, phone, socialLinks } = personalInfo;

  const socialIcons = {
    LinkedIn: SiLinkedin,
    Github: SiGithub,
    Twitter: SiX, // Twitter is now "X"
    Instagram: SiInstagram,
    youtube: SiYoutube,
  };

  return (
    <StyledFooter>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a creative team dedicated to building amazing digital
            experiences. Let’s create something extraordinary together!
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Services</Link>
            </li>
            <li>
              <Link to="projects">Portfolio</Link>
            </li>
            <li>
              <Link to="contact-me">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>
              Email: <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>Phone: <a href={`tel:${phone}`} aria-label="Phone number">
              Click to call
            </a></li>
            <li>Address: {location}</li>
          </ul>
        </div>
      </div>

      <div className="social-icons">
        {socialLinks.map(({ name, url }) => {
          const Icon = socialIcons[name];
          return (
            Icon && (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <Icon />
              </a>
            )
          );
        })}
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved. |{" "}
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
