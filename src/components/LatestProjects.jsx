import styled from "styled-components";
import AnimatedCard from "../ui/AnimatedCard";
import { Link } from "react-router-dom";
import { useProjects } from "../mutationsAndFn/project/useProject";
import PlaceholderLoader from "./PlaceholderLoader";
import { formatDate } from "../utils/helper";

const LatestProjects = () => {
  const { isLoading, projects } = useProjects();

  if (isLoading) {
    return (
      <PlaceHolderGrid>
        <AnimatedCard index={1} variant="fade">
          <PlaceholderLoader />
        </AnimatedCard>
        <AnimatedCard index={2} variant="fade">
          <PlaceholderLoader />
        </AnimatedCard>
      </PlaceHolderGrid>
    );
  }

  const latestProjects = projects.slice(-2);
  return (
    <LatestProjectsSection>
      <AnimatedCard index={0} variant="fade">
        <div className="latestHead">
          <h2>Latest Projects</h2>
          <Link to="projects">View All</Link>
        </div>
      </AnimatedCard>
      <LatestHeadParagraph>
        From concept to reality—explore how we&apos;re bringing groundbreaking
        ideas to life.
      </LatestHeadParagraph>

      <LatestProjectsContainer>
        {latestProjects.map((project, index) => (
          <AnimatedCard key={project.id} index={index} className="projectCard">
            <div className="imgContainer">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="cardHead">
              <h3>{project.title}</h3>
              <date className="date">{formatDate(project.created_at)}</date>
            </div>
            <div className="cardUlr">
              <a href={project.github}>GitHub</a>
              <a href={project.link}>Live Demo</a>
            </div>
          </AnimatedCard>
        ))}
      </LatestProjectsContainer>
    </LatestProjectsSection>
  );
};

export default LatestProjects;

const LatestProjectsSection = styled.section`
  background: ${({ theme }) => theme.background};
  padding: 4rem 2rem;

  .latestHead {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
  }

  a {
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 9px;
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }) => theme.border};

    &:hover {
      background: #000;
      color: #fff;
    }
  }

  /* 📱 Mobile Styles */
  @media (max-width: 768px) {
    padding: 3rem 1rem;

    .latestHead {
      gap: 1rem;
      text-align: left;
      padding: 1rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    a {
      font-size: 1rem;
    }
  }
`;

const LatestHeadParagraph = styled.p`
  display: block;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  padding: 0 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const LatestProjectsContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  .projectCard {
    background: ${({ theme }) => theme.cardBackground};
    padding: 1rem;
    border-radius: 9px;
    box-shadow: 0 0 20px ${({ theme }) => theme.liteShadow};
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 20px ${({ theme }) => theme.shadow};
    }
  }

  .imgContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem 1rem 0 1rem;
    background: #f0f0f0;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .cardHead {
    align-items: center;
    margin-bottom: 1rem;

    h3 {
      font-size: 1.2rem;
    }

    .date {
      color: ${({ theme }) => theme.paleText};
      font-size: 1rem;

      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }

  .cardUlr {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.paleText};
    margin-bottom: 1rem;
  }

  /* 📱 Mobile Styles */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;

    .projectCard {
      padding: 0.8rem;
    }

    img {
      height: 150px;
    }

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const PlaceHolderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;
  gap: 2rem;
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
