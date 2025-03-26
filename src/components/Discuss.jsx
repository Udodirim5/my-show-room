import { Link } from "react-router-dom";
import styled from "styled-components";

const Discuss = () => {
  return (
    <DiscussContainer>
      <div className="textContainer">
        <span>Have a project idea in mind?</span>
        <h2>Let’s Discuss about the Project Details</h2>
        <Link to="contact-me">Book a Meeting</Link>
      </div>
      <div className="imageContainer">
        <img src="images/discuss.png" alt="random image" />
      </div>
    </DiscussContainer>
  );
};

export default Discuss;

const DiscussContainer = styled.div`
  display: flex;
  margin: 5rem auto;
  border-radius: 1rem;
  box-shadow: 0 5px 15px #00000019;
  max-width: 1095px;
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  padding: 0 2rem;
  margin-top: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      margin-top: 2rem;
    }

    span {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 27px;
    }
    h2 {
      font-size: 2.5rem;
      font-weight: 600;
      line-height: 48px;
      color: #10041c;

      @media (max-width: 768px) {
        font-size: 2rem;
        line-height: 60px;
      }

      @media (max-width: 480px) {
        line-height: 45px;
      }
    }
    a {
      padding: 1rem 2rem;
      margin-top: 2rem;
      background-color: #4f0994;
      color: #fff;
      border-radius: 10px;
      text-decoration: none;
      font-size: 1.5rem;
      transition: all 0.3s ease;
      width: fit-content;
      animation: rock 4s infinite ease-in-out;

      &:hover {
        background-color: #10041c;
        color: #fff;
      }


      @keyframes rock {
  0%, 100% {
    transform: scale(1);
    opacity: .7;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

    }
  }

  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    animation: rockingUpAndDown 2s infinite ease-in-out;


    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
    
    @keyframes rockingUpAndDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}


  }
`;
