import styled, { keyframes } from "styled-components";
import AnimatedCard from "../ui/AnimatedCard";

const AboutPage = () => {
  return (
    <StyledAbout>
      <AnimatedCard index={1} variant="fade">
        <h1 className="header">Hey, I'm Udodirim</h1>
        <p className="aboutHeroParagraph">
          I don’t just design interfaces—I create digital experiences that
          delight users. With a background in tech and a passion for
          creativity, I blend creativity and strategy to craft designs that
          feel as good as they look.
        </p>
      </AnimatedCard>

      <StatsGrid>
        <AnimatedCard index={2} variant="zoom">
          <div className="stat">
            <h2>30+</h2>
            <h3>Projects Completed</h3>
            <p>
              Helping various clients around the world by actualizing their idea
              and vision into reality.
            </p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={3} variant="zoom">
          <div className="stat">
            <h2>4+</h2>
            <h3>Years of Experiences</h3>
            <p>
              Over 4 years of experience in the field of web development and
              design.
            </p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={4} variant="zoom">
          <div className="stat">
            <h2>99%</h2>
            <h3>Of Brain Always Designing</h3>
            <p>
              The number of spontaneous celebratory dances performed by clients
              after seeing their transformed digital presence.
            </p>
          </div>
        </AnimatedCard>
      </StatsGrid>

      <ImageContainer>
        <AnimatedCard index={5} variant="fade">
          <img
            src="images/my_pic.jpg"
            alt="[YOUR_NAME] in their natural habitat"
          />
        </AnimatedCard>
      </ImageContainer>

      <FunFactContainer>
        <h2>My Design Process</h2>
        <p>
          My process is simple. I start with your needs, create engaging
          experiences, research, experiment with ideas, and use your feedback to
          guide me.
        </p>
      </FunFactContainer>

      <Process>
        <div className="number">1</div>
        <div className="text">
          <strong>Ideation & Wireframing</strong>
          <span>
            Understanding your business, target audience, and project goals is
            my first step. I gather insights through research and align on a
            clear strategy that ensures we’re set up for success.
          </span>
        </div>
      </Process>

      <Process>
        <div className="number">2</div>
        <div className="text">
          <strong>Ideation & Wireframing</strong>
          <span>
            Ideation & WireframingBefore diving into detailed design, I create
            wireframes and prototypes to map out the structure and flow, making
            sure that the user journey is smooth and intuitive{" "}
          </span>
        </div>
      </Process>

      <Process>
        <div className="number">3</div>
        <div className="text">
          <strong>Design & Development</strong>
          <span>
            With the foundation set, I bring the product to life through
            high-fidelity design and collaborate closely with developers to
            ensure every interaction is pixel-perfect and functional.
          </span>
        </div>
      </Process>

      <Process>
        <div className="number">4</div>
        <div className="text">
          <strong>Testing & Iteration</strong>
          <span>
            I value feedback and use testing insights to refine the design,
            ensuring that the final product is not only aesthetically pleasing
            but also highly effective and user-centered.{" "}
          </span>
        </div>
      </Process>
    </StyledAbout>
  );
};

export default AboutPage;

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.hoverBackground || theme.background};
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }

  .header {
    font-size: 4rem;
    font-weight: 800;
    line-height: 75px;
    color: ${({ theme }) => theme.accent};
    padding: 0.5rem 2rem;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      font-size: 3rem;
      line-height: 60px;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      line-height: 45px;
    }
  }

  .aboutHeroParagraph {
    font-size: 1.25rem;
    padding: 0 2rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${({ theme }) => theme.text};
    max-width: 800px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;
  gap: 2rem;
  margin: 0;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  .stat {
    padding: 2rem;
    background: ${({ theme }) => theme.cardBackground};
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 350px;
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 4px 20px ${({ theme }) => theme.liteShadow};
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: ${({ theme }) => theme.buttonText};

    &:hover {
      background: ${({ theme }) => theme.inputBackground};
      transform: translateY(-5px);
      box-shadow: 0 8px 25px ${({ theme }) => theme.buttonText};
    }

    h2 {
      font-size: 3.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.accent};
      line-height: 1;
      margin: 0.5rem 0;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.text};
      line-height: 1.3;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.secondaryText};
      line-height: 1.6;
    }
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  margin: 2rem 0;
  padding: 2rem;
  border-radius: 1rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    max-height: 700px;
    object-fit: cover;
    border-radius: 1rem;
    filter: grayscale(20%);
    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(0%);
    }

    @media (max-width: 768px) {
      max-height: 400px;
    }

    @media (max-width: 480px) {
      max-height: 300px;
    }
  }
`;

const FunFactContainer = styled.div`
  padding: 2rem;
  margin: 2rem 10px;
  border-radius: 1rem;
  border-left: 5px solid ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.buttonText};

  &:hover {
    background: ${({ theme }) => theme.inputBackground};
    transform: translateY(-5px);
  }

  h2 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.accent};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.text};
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(138, 43, 226, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(138, 43, 226, 0); }
`;

const Process = styled.div`
  display: flex;
  margin-top: 2rem;
  margin: 10px;
  gap: 2rem;
  position: relative;
  padding: 2rem;
  border-radius: 16px;
  background: ${({ theme }) => theme.buttonText};

  &:hover {
    background: ${({ theme }) => theme.inputBackground};
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 25px;
    height: 100%;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      ${({ theme }) => theme.primary || "#8a2be2"},
      transparent
    );
    opacity: 0.3;
  }

  .number {
    font-size: 2.5rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.buttonText};
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.primary || "#8a2be2"},
      ${({ theme }) => theme.secondary || "#4b0082"}
    );
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    animation: ${pulse} 3s ease infinite, ${glow} 3s ease infinite;
    border: 2px solid
      ${({ theme }) =>
        theme.mode === "dark"
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.1)"};
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 0.5rem;

    strong {
      font-size: 1.75rem;
      line-height: 1.3;
      font-weight: 700;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.text},
        ${({ theme }) => theme.primary || "#8a2be2"}
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      display: inline-block;
    }

    span {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.6;
      color: ${({ theme }) => theme.text};
      opacity: 0.9;
      position: relative;
      padding-left: 1rem;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.5rem;
        height: 80%;
        width: 3px;
        background: linear-gradient(
          to bottom,
          ${({ theme }) => theme.primary || "#8a2be2"},
          ${({ theme }) => theme.secondary || "#4b0082"}
        );
        border-radius: 3px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
    padding: 1.5rem;

    .number {
      height: 50px;
      width: 50px;
      font-size: 2rem;
    }

    .text {
      strong {
        font-size: 1.5rem;
      }
      span {
        font-size: 1.1rem;
        padding-left: 0.75rem;
      }
    }

    &::before {
      left: 30px;
      top: 60px;
      height: calc(100% - 60px);
    }
  }
`;
