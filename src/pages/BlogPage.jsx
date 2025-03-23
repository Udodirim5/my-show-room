import styled from "styled-components";
import { blogPosts } from "../../data/data";
import AnimatedCard from "../ui/AnimatedCard";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const BlogSection = styled.section`
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
  }
`;

const BlogHeadParagraph = styled.p`
  display: block;
  font-size: 1.2rem;
  color: #333;
  padding: 0 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const AllBlogContainer = styled.div`
  // Changed from <a> to <div>
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  color: #10041c;
  text-decoration: none;

  .blogCard {
    background: #fff;
    padding: 1rem;
    border-radius: 9px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }

    &:hover img {
      transform: scale(1.03);
    }
  }

  a {
    text-decoration: none;
    color: #10041c;
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
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out; // Smooth effect
  }

  .cardHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
  }

  .date {
    font-size: 1.3rem;
    font-weight: 400;
  }

  .excerpt {
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

const BlogPage = () => {
  return (
    <BlogSection>
      <AnimatedCard index={0} variant="fade">
        <div className="latestHead">
          <h2>Exploring Design Trends</h2>
        </div>
      </AnimatedCard>
      <BlogHeadParagraph>
        Exploring design trends, sharing lessons, and offering a peek behind the
        scenes.
      </BlogHeadParagraph>

      <AllBlogContainer>
        {blogPosts.map((blog, index) => (
          <AnimatedCard key={blog.id} index={index} className="blogCard">
            <Link to={`/blog/${blog.id}`}>
              {/* Keep the link inside the card */}
              <div className="imgContainer">
                <img src={blog.coverImage} alt={blog.title} />
              </div>
              <div className="cardHead">
                <h3>{blog.title}</h3>
                <date className="date">{blog.createdAt}</date>
              </div>
              <p className="excerpt">{blog.excerpt}</p>
            </Link>
          </AnimatedCard>
        ))}
      </AllBlogContainer>

      {blogPosts.length > 8 && (
        <LoadMore>
          <Button backgroundColor="#10041c" type="button">
            Load more
          </Button>
        </LoadMore>
      )}
    </BlogSection>
  );
};

export default BlogPage;
