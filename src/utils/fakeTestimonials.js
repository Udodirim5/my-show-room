import { v4 as uuidv4 } from "uuid";

const companies = ["TechCorp", "InnovateX", "NexGen Solutions", "AlphaSoft", "BetaWare"];
const roles = ["CEO", "Software Engineer", "Product Manager", "Designer", "Marketing Lead"];
const testimonialsText = [
  "This service is absolutely amazing! It exceeded all my expectations.",
  "Great experience, highly recommend it to anyone looking for quality.",
  "I was impressed by the professionalism and attention to detail.",
  "Fantastic customer support and a truly seamless experience.",
  "One of the best business decisions I've made—I'll definitely be back!"
];

export const generateTestimonials = (count = 5) => {
  return Array.from({ length: count }, (_, index) => ({
    id: uuidv4(), // Unique ID
    logo: `https://api.dicebear.com/7.x/icons/svg?seed=Company${index}`,
    text: testimonialsText[Math.floor(Math.random() * testimonialsText.length)],
    author: `User ${index + 1}`, // Placeholder names
    role: roles[Math.floor(Math.random() * roles.length)],
    image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${index + 1}.jpg`,
    company: companies[Math.floor(Math.random() * companies.length)],
    rating: Math.floor(Math.random() * 3) + 3 // Random rating between 3 and 5
  }));
};

// Example usage
export const testimonials = generateTestimonials(47);
