import styled from "styled-components";
import AnimatedCard from "../ui/AnimatedCard";
import Button from "../ui/Button";
import { useProjects } from "../mutationsAndFn/project/useProject";
import { formatDate } from "../utils/helper";
import PlaceholderLoader from "../components/PlaceholderLoader";

const Projects = () => {
  const { isLoading, projects } = useProjects();

  if (isLoading) {
    return (
      <PlaceHolderGrid>
        <PlaceholderLoader />
        <PlaceholderLoader />
      </PlaceHolderGrid>
    );
  }

  return (
    <ProjectsSection>
      <AnimatedCard index={0} variant="fade">
        <div className="latestHead">
          <h2>Recent Projects</h2>
        </div>
      </AnimatedCard>
      <ProjectsHeadParagraph>
        A closer look at my newest ventures, where creativity meets precision.
      </ProjectsHeadParagraph>

      <AllProjectsContainer>
        {projects.map((project, index) => (
          <AnimatedCard key={project.id} index={index} className="projectCard">
            <div className="imgContainer">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="cardHead">
              <h3>{project.title}</h3>
              <date className="date">{formatDate(project.created_at)}</date>
            </div>
            <div className="cardUlr">
              <a href={project.gitHubUrl} target="black">
                GitHub
              </a>
              <a href={project.liveUrl} target="black">
                Live Demo
              </a>
            </div>
          </AnimatedCard>
        ))}
      </AllProjectsContainer>

      {projects.length > 8 && (
        <LoadMore>
          <Button backgroundColor="#10041c" type="button">
            Load more
          </Button>
        </LoadMore>
      )}
    </ProjectsSection>
  );
};

export default Projects;

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

const ProjectsSection = styled.section`
  padding: 4rem 2rem;

  .latestHead {
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }

    h2 {
      margin-bottom: 2rem;
      font-size: 2.5rem;

      @media screen and (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 1rem;
        text-align: left;
      }
    }
  }

  a {
    color: ${({ theme }) => theme.paleText};
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 9px;
    transition: all 0.3s ease;
    border: 1px solid #333;

    &:hover {
      background: #000;
      color: #fff;
    }
  }

  /* 📱 Mobile Styles */
  @media (max-width: 768px) {
    padding: 3rem 1rem;

    .latestHead {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }

    h2 {
      font-size: 2rem;
    }

    a {
      font-size: 1rem;
    }
  }
`;

const ProjectsHeadParagraph = styled.p`
  display: block;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.paleText};
  padding: 0 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const AllProjectsContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  .projectCard {
    box-shadow: 0 0 20px ${({ theme }) => theme.liteShadow};
    padding: 1rem;
    border-radius: 10px;
    background: ${({ theme }) => theme.buttonText};

    &:hover {
      background: ${({ theme }) => theme.inputBackground};
      box-shadow: 0 0 20px ${({ theme }) => theme.shadow};
      transform: translateY(-5px);
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
    color: ${({ theme }) => theme.paleText};
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

const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
