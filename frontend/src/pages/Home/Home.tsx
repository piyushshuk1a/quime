import { Footer } from '@/components';
import {
  Categories,
  Features,
  GetStarted,
  HeroSection,
  HowItWorks,
} from '@/containers';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Categories />
      <HowItWorks />
      <GetStarted />
      <Footer />
    </>
  );
};
