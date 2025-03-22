import Discuss from "../components/Discuss"
import Hero from "../components/Hero"
import LatestProjects from "../components/LatestProjects"
import TestimonialCarousel from "../ui/TestimonialCarousel"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LatestProjects />
      <TestimonialCarousel />
      <Discuss />
    </div>
  )
}

export default HomePage