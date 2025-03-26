import styled from "styled-components";
import AnimatedCard from "../ui/AnimatedCard";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <StyledHero>
      <div className="header">
        <AnimatedCard index={1} variant="fade">
          <h1>Hey, I’m Udodirim</h1>
        </AnimatedCard>

        <AnimatedCard index={3} variant="fade">
          <span>
            <i className="pulsingDot"></i> Available for New projects
          </span>
        </AnimatedCard>
      </div>
      <AnimatedCard index={2} variant="fade">
        <h2 className="subheader">Web Developer</h2>
      </AnimatedCard>
      <AnimatedCard index={4} variant="fade">
        <p className="heroParagraph">
          I’m a Frontend Developer specializing in React and Next.js. I create
          high-performance, visually stunning websites that enhance user
          experiences. With a strong focus on efficiency and design, I deliver
          projects that are both functional and engaging.
        </p>
      </AnimatedCard>
      <AnimatedCard index={5} variant="fade">
        <div className="heroLinks">
          <Link to="about">About Me</Link>
          <Link to="projects">Explore Works</Link>
        </div>
      </AnimatedCard>
    </StyledHero>
  );
};

export default Hero;

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 0.5rem 2rem;

    @media (max-width: 768px) {
      margin-top: 3rem;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 4rem;
      font-weight: 600;
      line-height: 75px;
      color: ${({ theme }) => theme.text};

      @media (max-width: 768px) {
        font-size: 2.5rem;
        line-height: 30px;
      }
    }
    span {
      font-size: 1rem;
      font-weight: 600;
      line-height: 50px;
      color: ${({ theme }) => theme.text};
      border-radius: 1rem;
      padding: 0.3rem 1rem;
      border: 2px solid #5e0fad;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .pulsingDot {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #5e0fad;
      box-shadow: 0 0 10px rgba(94, 15, 173, 0.8);
      animation: pulsing 1.5s infinite ease-in-out;
    }

    @keyframes pulsing {
      0% {
        transform: scale(1);
        opacity: 1;
        box-shadow: 0 0 10px rgba(94, 15, 173, 0.8);
      }
      50% {
        transform: scale(1.4);
        opacity: 0.6;
        box-shadow: 0 0 20px rgba(94, 15, 173, 1);
      }
      100% {
        transform: scale(1);
        opacity: 1;
        box-shadow: 0 0 10px rgba(94, 15, 173, 0.8);
      }
    }
  }

  .subheader {
    font-size: 2rem;
    font-weight: 600;
    line-height: 43px;
    color: ${({ theme }) => theme.text};
    padding: 0.5rem 2rem;

    @media (max-width: 768px) {
      margin-left: 1rem;
      margin-bottom: 0.3rem;
    }
  }

  .heroParagraph {
    font-size: 1.125rem;
    padding: 0 2rem;
    font-weight: 400;
    line-height: 27px;
    color: ${({ theme }) => theme.text};
  }

  .heroLinks {
    display: flex;
    padding: 0 2rem;
    gap: 20px;
    margin: 20px 0;

    @media (min-width: 768px) {
      align-items: center;
    }

    @media (max-width: 768px) {
      flex-direction: column; /* Stack buttons on mobile */
      gap: 10px;
    }
  }

  a {
    color: #5e0fad;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 18px;
    padding: 1rem 2rem;
    border-radius: 9px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    display: inline-block;

    &:first-child {
      background-color: #5e0fad;
      color: #fff;
      border: 2px solid #5e0fad;
    }

    &:nth-child(2) {
      color: ${({ theme }) => theme.text};
      border: 2px solid ${({ theme }) => theme.text};
      background-color: ${({ theme }) => theme.background};
    }

    &:hover {
      color: ${({ theme }) => theme.buttonText};
      background-color: ${({ theme }) => theme.text};
      border: 2px solid #10041c;
    }
  }

  /* 📱 Mobile Styles */
  @media (max-width: 768px) {
    padding: 3rem 1rem;

    .header {
      font-size: 2.5rem;
      line-height: 50px;
      padding: 0;
    }

    .subheader {
      font-size: 1.5rem;
      line-height: 30px;
      padding: 0;
    }

    .heroParagraph {
      font-size: 1rem;
      padding: 0 1rem;
      line-height: 24px;
    }
  }
`;
