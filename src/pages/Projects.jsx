import styled from "styled-components";
import { projects } from "../../data/data";
import AnimatedCard from "../ui/AnimatedCard";
import Button from "../ui/Button";

const ProjectsSection = styled.section`
  background: #f9f9f9;
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
    color: #333;
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
  color: #333;
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
    background: #fff;
    padding: 1rem;
    border-radius: 9px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .cardUlr {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
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

const Projects = () => {
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
              <img src={project.ImageUrl} alt={project.title} />
            </div>
            <div className="cardHead">
              <h3>{project.title}</h3>
              <date>{project.year}</date>
            </div>
            <div className="cardUlr">
              <a href={project.github}>GitHub</a>
              <a href={project.link}>Live Demo</a>
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
