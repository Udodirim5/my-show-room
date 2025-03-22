import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Ensure Swiper CSS is included
import { testimonials } from "../../data/data";

const Carousel = styled.div`
  .testimonial-swiper {
    width: 100%;
    max-width: 1090px;
    margin: auto;
    border: 1px solid #10041c78;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 #10041cc0;
  }

  .testimonial-card {
    padding: 2rem 5rem;
    background: white;
  }

  .company-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #10041c;
    overflow: hidden;
    box-shadow: 0 0 10px #10041c19;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .testimonial-text {
    margin: 2rem 0;

    p {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 27px;
    }
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;

    .author-img {
      border: 2px solid #10041c;
      overflow: hidden;
      box-shadow: 0 0 10px #10041c19;
      width: 50px;
      height: 50px;
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
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 32px;
    }
    span {
      font-size: 1rem;
      font-weight: 400;
      line-height: 26px;
      color: #3a373e;
    }
  }
`;

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
              <div className="company-logo">
                <img src={item.logo} alt="Company Logo" />
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
