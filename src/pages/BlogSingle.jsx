import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { blogPosts } from "../../data/data";

// Container for the entire blog post
const BlogSingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${({ theme }) => theme.background};
  border-radius: 15px;
  box-shadow: 0 4px 15px ${({ theme }) => theme.liteShadow};
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
  
  `;

// Styled component for the main post content
const SinglePostContainer = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px ${({ theme }) => theme.liteShadow};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  h2 {
    margin: 1.5rem 0 1rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  pre {
    background: ${({ theme }) => theme.inputBackground};
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  code {
    font-family: "Courier New", Courier, monospace;
    font-size: 0.9rem;
    color: #d63384;
  }

  ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
  }
`;

// Styled component for the related posts section
const RelatedPosts = styled(motion.aside)`
  background: ${({ theme }) => theme.background};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.liteShadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.liteShadow};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1rem;
      font-size: 1.1rem;
      transition: color 0.3s ease;

      &:hover {
        color: #007bff;
        cursor: pointer;
      }
    }
  }
`;

// Animation variants for framer-motion
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const BlogSingle = () => {
  const { id } = useParams(); // Get the post ID from URL params
  const post = blogPosts.find((post) => post.id === parseInt(id)); // Find the post

  if (!post) return <p>Post not found.</p>; // Handle invalid ID

  return (
    <BlogSingleContainer>
      <SinglePostContainer
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </SinglePostContainer>

      <RelatedPosts
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        <h2>Related Posts</h2>
        <ul>
          <li>5 Tips for Better Productivity</li>
          <li>How to Stay Motivated in 2023</li>
          <li>The Ultimate Guide to Remote Work</li>
          <li>10 Books Every Developer Should Read</li>
        </ul>
      </RelatedPosts>
    </BlogSingleContainer>
  );
};

export default BlogSingle;
