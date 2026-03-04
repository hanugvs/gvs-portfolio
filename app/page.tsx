import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Contact from '../components/sections/Contact';
import MotionWrapper from '../components/MotionWrapper';

const HomePage = () => {
  return (
    <MotionWrapper>
      <Hero />
      <About />
      <Skills />
      <ExperienceTimeline />
      <FeaturedProjects />
      <Contact />
    </MotionWrapper>
  );
};

export default HomePage;
