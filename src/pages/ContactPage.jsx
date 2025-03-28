import styled from "styled-components";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaComments,
} from "react-icons/fa";
import {
  SiLinkedin,
  SiGithub,
  SiX,
  SiInstagram,
  SiYoutube,
} from "react-icons/si";

import Button from "../ui/Button";
import { personalInfo } from "../../data/data";
import toast from "react-hot-toast";

const ContactPage = () => {
  const { email: myEmail, location, phone, socialLinks } = personalInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      toast.error("Please fill out all fields.");
      return;
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://your-api-endpoint.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message.");

      toast.success("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const socialIcons = {
    LinkedIn: SiLinkedin,
    Github: SiGithub,
    Twitter: SiX, // Twitter is now "X"
    Instagram: SiInstagram,
    youtube: SiYoutube,
  };

  return (
    <ContactContainer>
      <h1 className="contactHeader">Let’s Bring Your Idea to Life!</h1>
      <p className="contactHeadParagraph">
        Have a project in mind or want to discuss a design idea? Let's talk.
      </p>

      <ContactForm onSubmit={handleSubmit}>
        <Flex>
          <InputField
            type="text"
            name="name"
            placeholder="Your Name"
            required
            autoComplete="name"
          />
          <InputField
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="email"
          />
        </Flex>

        <InputField type="text" name="subject" placeholder="Subject" required />
        <TextArea name="message" placeholder="Message" required></TextArea>

        <Button backgroundColor="#10041c" type="submit">
          Submit
        </Button>
      </ContactForm>
      <ContactLinks>
        <div className="contactInfo">
          <div className="contactItem">
            <div>
              <FaEnvelope className="icon" />
              <strong>Email</strong>
            </div>
            <a href={`mailto:${myEmail}`}>{myEmail}</a>
          </div>

          <div className="contactItem">
            <div>
              <FaComments className="icon" />
              <strong>Get support</strong>
            </div>
            <a href={`https://wa.me/${phone}`} target="blank">
              Chat with us
            </a>
          </div>
          <div className="contactItem">
            <div>
              <FaMapMarkerAlt className="icon" />
              <strong>Visit my office</strong>
            </div>
            <span>{location}</span>
          </div>
          <div className="contactItem">
            <div>
              <FaPhoneAlt className="icon" />
              <strong>Schedule a meeting</strong>
            </div>
            <a href={`tel:${phone}`} aria-label="Phone number">
              Book here
            </a>
          </div>
        </div>

        <div className="socialLinks">
          <strong>Check me on</strong>
          <div className="socialIcons">
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
                    <Icon className="socialIcon" />
                  </a>
                )
              );
            })}
          </div>
        </div>
      </ContactLinks>
    </ContactContainer>
  );
};

export default ContactPage;

const ContactContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem 4.8rem 0;

  @media (max-width: 768px) {
    padding: 2rem 2rem 0;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem 0;
  }

  .contactHeader {
    font-size: 3rem;
    font-weight: 600;
    line-height: 56px;

    @media (max-width: 768px) {
      font-size: 2.5rem;
      line-height: 48px;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      line-height: 40px;
    }
  }

  .contactHeadParagraph {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 27px;
    margin-top: 8px;
    color: ${({ theme }) => theme.text};

    @media (max-width: 768px) {
      font-size: 1.125rem;
      line-height: 24px;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      line-height: 22px;
    }
  }
`;

const ContactForm = styled.form`
  margin: 2rem auto;
  padding: 2rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  box-shadow: 0 0 20px ${({ theme }) => theme.liteShadow};

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const InputField = styled.input`
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputText};
  width: 100%;
  padding: 16px 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    padding: 14px 18px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 12px 16px;
  }

  ::placeholder {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.paleText};

    @media (max-width: 768px) {
      font-size: 1.125rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  &:focus {
    border: 2px solid #10041c;
  }
`;

const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputText};
  width: 100%;
  padding: 16px 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 1.25rem;
  resize: none;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    padding: 14px 18px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 12px 16px;
  }

  ::placeholder {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.paleText};

    @media (max-width: 768px) {
      font-size: 1.125rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
  }

  .contactInfo {
    flex: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px ${({ theme }) => theme.liteShadow};

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .contactItem {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 32px;

      @media (max-width: 768px) {
        font-size: 1.125rem;
        line-height: 28px;
      }

      @media (max-width: 480px) {
        font-size: 1rem;
        line-height: 24px;
      }
    }

    span,
    a {
      color: ${({ theme }) => theme.text};
      font-size: 1rem;
      font-weight: 400;
      line-height: 26px;

      @media (max-width: 768px) {
        font-size: 0.875rem;
        line-height: 22px;
      }

      @media (max-width: 480px) {
        font-size: 0.75rem;
        line-height: 20px;
      }
    }

    &:hover :is(a, span) {
      color: #41097978;
      text-decoration: underline;
    }
  }

  .icon {
    color: ${({ theme }) => theme.text};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 32px;
    margin-right: 5px;

    @media (max-width: 768px) {
      font-size: 1.125rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .socialLinks {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 4rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px ${({ theme }) => theme.liteShadow};

    @media (max-width: 768px) {
      padding: 1.5rem;
    }
  }

  .socialIcons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: ${({ theme }) => theme.background};
    column-gap: 3rem;
    row-gap: 1rem;
    margin-top: 10px;
    padding: 2rem;

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
      padding: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.paleText};
    font-weight: 500;
  }

  .socialIcon {
    font-size: 2rem;
    padding: 4px;
    border-radius: 5px;
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.text};

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }

    &:hover {
      border: 1px solid #10041c;
    }
  }
`;
