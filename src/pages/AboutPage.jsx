import styled from "styled-components";
import AnimatedCard from "../ui/AnimatedCard";

const AboutPage = () => {
  return (
    <StyledAbout>
      <AnimatedCard index={1} variant="fade">
        <h1 className="header">Hey, I'm Udodirim</h1>
        <p className="aboutHeroParagraph">
          I don't just design interfaces – I craft digital experiences that make 
          users do a happy dance. With a background in [UNIQUE_BACKGROUND] and 
          a passion for [QUIRKY_INTEREST], I bring unexpected creativity to every 
          pixel I push.
        </p>
      </AnimatedCard>

      <StatsGrid>
        <AnimatedCard index={2} variant="zoom">
          <div className="stat">
            <h2>[X]+</h2>
            <h3>Coffee Cups Per Project</h3>
            <p>
              Each drop fuels my mission to turn "meh" into "magical" – one 
              meticulously crafted component at a time.
            </p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={3} variant="zoom">
          <div className="stat">
            <h2>[Y]+</h2>
            <h3>Happy Client Dance Moves</h3>
            <p>
              The number of spontaneous celebratory dances performed by clients 
              after seeing their transformed digital presence.
            </p>
          </div>
        </AnimatedCard>

        <AnimatedCard index={4} variant="zoom">
          <div className="stat">
            <h2>[Z]%</h2>
            <h3>Of Brain Always Designing</h3>
            <p>
              Even my shower thoughts are about user flows. It's not an obsession... 
              okay, maybe just a little.
            </p>
          </div>
        </AnimatedCard>
      </StatsGrid>

      <AnimatedCard index={5} variant="fade">
        <FunFactContainer>
          <h2>Fun Fact About Me</h2>
          <p>
            Before design stole my heart, I used to [UNEXPECTED_PAST_LIFE]. This 
            gives me a unique perspective when tackling [SPECIFIC_DESIGN_CHALLENGE].
          </p>
        </FunFactContainer>
      </AnimatedCard>

      <ImageContainer>
        <AnimatedCard index={6} variant="slide">
          <img 
            src="images/my_pic.jpg" 
            alt="[YOUR_NAME] in their natural habitat" 
          />
          <PhotoCaption>
            Pictured: Strategically positioned near plants for that "I-have-my-life-together" 
            aesthetic. The coffee stain on my notebook is 100% real.
          </PhotoCaption>
        </AnimatedCard>
      </ImageContainer>
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
    text-shadow: 2px 2px 0px rgba(0,0,0,0.1);

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
  margin: 2rem 0;

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
    min-height: 300px;
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 4px 20px ${({ theme }) => theme.liteShadow};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px ${({ theme }) => theme.darkShadow};
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
  padding: 0;
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
  margin: 2rem 0;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 1rem;
  border-left: 5px solid ${({ theme }) => theme.accent};

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

const PhotoCaption = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  font-style: italic;
  margin-top: 1rem;
  padding: 0 2rem;
`;