import styled from "styled-components";

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
    h1{
      font-size: 4rem;
      font-weight: 600;
      line-height: 75px;
      color: #10041c;
    }
    span{
      font-size: 1rem;
      font-weight: 600;
      line-height: 50px;
      color: #10041c8b;
      border-radius: 1rem;
      padding: 0.3rem 1rem;
      border: 2px solid #5e0fad;
    }
  }

  .subheader {
    font-size: 2rem;
    font-weight: 600;
    line-height: 43px;
    color: #10041c;
    padding: 0.5rem 2rem;
  }

  .heroParagraph {
    font-size: 1.125rem;
    padding: 0 2rem;
    font-weight: 400;
    line-height: 27px;
    color: #10041c;
  }

  .heroLinks {
    display: flex;
    padding: 0 2rem;
    align-items: center;
    gap: 20px;
    margin: 20px 0;

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
      color: #10041c;
      border: 2px solid #10041c;
    }

    &:hover {
      background-color: #10041c;
      color: #fff;
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

const Hero = () => {
  return (
    <StyledHero>
      <div className="header">
      <h1 >Hey, I’m Udodirim</h1>
      <span>Available for New projects</span>
      </div>
      <h2 className="subheader">Web Developer</h2>
      <p className="heroParagraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        lacus enim. Sed sit amet lacus enim. Sed sit amet lacus enim. Sed sit
        amet lacus enim.
      </p>
      <div className="heroLinks">
        <a href="">About Me</a>
        <a href="">Explore Works</a>
      </div>
    </StyledHero>
  );
};

export default Hero;
