import styled from "styled-components";
import AnimatedCard from "../ui/AnimatedCard";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  
  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }

  .header {
    font-size: 4rem;
    font-weight: 600;
    line-height: 75px;
    color: #10041c;
    padding: 0.5rem 2rem;

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
    font-size: 1.125rem;
    padding: 0 2rem;
    font-weight: 400;
    line-height: 27px;
    color: #10041cae;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 24px;
    }

    @media (max-width: 480px) {
      font-size: 0.875rem;
      line-height: 20px;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 columns on tablets
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; // 1 column on mobile
  }

  .stat {
    padding: 2rem 1rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 300px;
    border: 1px solid #10041c78;
    border-radius: 1rem;
    box-shadow: 0 0 10px 0 #10041c78;

    h2 {
      font-size: 3rem;
      font-weight: 600;
      color: #a453f5;
      line-height: 56px;

      @media (max-width: 768px) {
        font-size: 2.5rem;
        line-height: 48px;
      }

      @media (max-width: 480px) {
        line-height: 40px;
      }
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 500;
      color: #10041c;
      line-height: 32px;

      @media (max-width: 768px) {
        font-size: 1.5rem;
        line-height: 28px;
      }

      @media (max-width: 480px) {
        line-height: 24px;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: #10041c8d;
      line-height: 26px;

      @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 22px;
      }

      @media (max-width: 480px) {
        line-height: 20px;
      }
    }
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    max-height: 600px;
    object-fit: cover;
    border-radius: 20px;

    @media (max-width: 768px) {
      max-height: 400px;
    }

    @media (max-width: 480px) {
      max-height: 300px;
    }
  }
`;

const AboutPage = () => {
  return (
    <StyledAbout>
      <AnimatedCard index={1} variant="fade">
        <h1 className="header">Hey, I’m Udodirim</h1>
        <p className="aboutHeroParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          lacus enim. Sed sit amet lacus enim. Sed sit amet lacus enim. Sed sit
          amet lacus enim.
        </p>
      </AnimatedCard>
      <StatsGrid>
        <AnimatedCard index={2} variant="zoom">
          <div className="stat">
            <h2>10+</h2>
            <h3>Years of Experience</h3>
            <p>
              Over a decade of expertise in UI/UX and product design, crafting
              digital experiences.
            </p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={3} variant="zoom">
          <div className="stat">
            <h2>100+</h2>
            <h3>Projects Completed</h3>
            <p>
              Over a hundred projects completed for a variety of industries and
              clients.
            </p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={4} variant="zoom">
          <div className="stat">
            <h2>100%</h2>
            <h3>Client Satisfaction</h3>
            <p>Our clients are happy, and we are proud of our work.</p>
          </div>
        </AnimatedCard>
      </StatsGrid>

      <ImageContainer>
        <img src="images/my_pic.jpg" alt="" />
      </ImageContainer>
    </StyledAbout>
  );
};

export default AboutPage;
