import styled, { keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useState } from "react";
import { testimonials } from "../utils/fakeTestimonials";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const numOfReviews = testimonials.length;
  if (numOfReviews === 0) return null;

  return (
    <CarouselContainer>
      <Swiper
        navigation
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
        className="magical-swiper"
        onSlideChange={(swiper) => setCurrent(swiper.realIndex)} // Track active slide
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <TestimonialCard>
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>

              <CompanySection>
                <CompanyLogo>
                  <img src={item.logo} alt={item.company} />
                </CompanyLogo>
                <CompanyInfo>
                  <CompanyName>{item.company}</CompanyName>
                  {item.rating && (
                    <Rating>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} $active={i < item.rating} />
                      ))}
                    </Rating>
                  )}
                </CompanyInfo>
              </CompanySection>

              <TestimonialText>
                <p>{item.text}</p>
              </TestimonialText>

              <AuthorSection>
                <AuthorImage>
                  <img src={item.image} alt={item.author} />
                </AuthorImage>
                <AuthorDetails>
                  <AuthorName>{item.author}</AuthorName>
                  <AuthorRole>{item.role}</AuthorRole>
                </AuthorDetails>
              </AuthorSection>
            </TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>

      <ReviewCounter>
        <span className="current">{current + 1}</span>
        <span className="divider">/</span>
        <span className="total">{numOfReviews}</span>
      </ReviewCounter>
    </CarouselContainer>
  );
};

export default TestimonialCarousel;

const CarouselContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 1rem;
  background: ${({ theme }) => theme.inputBackground};

  .magical-swiper {
    width: 100%;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.1);

    .swiper-button-next,
    .swiper-button-prev {
      color: ${({ theme }) => theme.text};
      background: rgba(255, 255, 255, 0.8);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      backdrop-filter: blur(5px);
      transition: all 0.3s ease;

      &:after {
        font-size: 1.2rem;
        font-weight: bold;
      }

      &:hover {
        transform: scale(1.1);
        background: ${({ theme }) => theme.inputText + "40"};
        color: white;
      }
    }
  }
`;

const TestimonialCard = styled.div`
  position: relative;
  padding: 4rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 24px;
  animation: ${fadeIn} 0.8s ease-out;
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 2rem;
  right: 3rem;
  font-size: 4rem;
  color: ${({ theme }) => theme.text + "60"};
  opacity: 0.5;

  @media (max-width: 768px) {
    font-size: 3rem;
    top: 1.5rem;
    right: 2rem;
  }
`;

const CompanySection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const CompanyLogo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  overflow: hidden;
  background: ${({ theme }) => theme.logo};
  padding: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(-5deg) scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Rating = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const Star = styled(FaStar)`
  color: ${({ $active }) => ($active ? "#ffd700" : "#ddd")};
  font-size: 1rem;
`;

const TestimonialText = styled.div`
  margin: 2rem 0;
  position: relative;

  p {
    font-size: 1.25rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    margin: 1.5rem 0;

    p {
      font-size: 1.1rem;
    }
  }
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px dashed ${({ theme }) => theme.border};
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.inputText + "40"};

  &:hover {
    transform: scale(1.1);
    border-color: ${({ theme }) => theme.inputText};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.strong`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AuthorRole = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.paleText};
  opacity: 0.8;
`;

const ReviewCounter = styled.div`
  position: absolute;
  bottom: 0.2rem;
  right: 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 5px 15px ${({ theme }) => theme.shadow + "50"};
  z-index: 10;
  animation: ${pulse} 2s infinite;

  .current {
    font-size: 1.2rem;
  }

  .divider {
    opacity: 0.6;
  }

  .total {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    right: 1rem;
    bottom: -0.5rem;
    padding: 0.4rem 1rem;
    font-size: 0.9rem;

    .current {
      font-size: 1rem;
    }
  }
`;
