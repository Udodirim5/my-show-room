import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Ensure Swiper CSS is included
import { testimonials } from "../../data/data";

const TestimonialCarousel = () => {
  return (
    <Carousel>
      <Swiper
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        className="testimonial-swiper"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial-card">
              <div className="companyReviewing">
                <div className="company-logo">
                  <img src={item.logo} alt="Company Logo" />
                </div>
                <div className="companyName">Name</div>
              </div>

              <div className="testimonial-text">
                <p>{item.text}</p>
              </div>

              <div className="testimonial-author">
                <div className="author-img">
                  <img src={item.image} alt={item.author} />
                </div>

                <div className="author-details">
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Carousel>
  );
};

export default TestimonialCarousel;

const Carousel = styled.div`
  .testimonial-swiper {
    width: 100%;
    max-width: 1090px;
    margin: auto;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
    overflow: hidden;

    .testimonial-card {
      padding: 2rem 5rem;
      border-radius: 15px;
      /* text-align: center; */
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.02);
      }

      .companyReviewing {
        display: flex;
        align-items: center;
        gap: 1rem;

        .company-logo {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid ${({ theme }) => theme.border};
          box-shadow: 0 4px 12px ${({ theme }) => theme.liteShadow};

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .companyName {
          font-size: 1.5rem;
        }
      }

      .testimonial-text {
        margin: 1.5rem 0;

        p {
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 1.6;
          color: ${({ theme }) => theme.paleText};
        }
      }

      .testimonial-author {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 15px;

        .author-img {
          overflow: hidden;
          border: 1px solid ${({ theme }) => theme.border};
          box-shadow: 0 4px 12px ${({ theme }) => theme.liteShadow};
          width: 55px;
          height: 55px;
          border-radius: 50%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .author-details {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        strong {
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.4;
        }

        span {
          font-size: 1rem;
          font-weight: 400;
          color: ${({ theme }) => theme.paleText};
        }
      }

      /* 📱 Responsive Design */
      @media (max-width: 768px) {
        .testimonial-card {
          padding: 1.5rem 3rem;
        }

        .testimonial-text p {
          font-size: 1.1rem;
        }

        .testimonial-author {
          flex-direction: column;
          text-align: center;
        }

        .author-details {
          text-align: center;
        }
      }

      @media (max-width: 480px) {
        .testimonial-card {
          padding: 1rem 2rem;
        }

        .company-logo {
          width: 50px;
          height: 50px;
        }

        .testimonial-text p {
          font-size: 1rem;
        }

        .author-img {
          width: 45px;
          height: 45px;
        }

        strong {
          font-size: 1.1rem;
        }

        span {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
