import { Hero } from "../Hero/Hero";
import { Navigation } from "../Navigation/Navigation";
import { Project } from "../Project/Project";
import { Technologys } from "../Technologys/Technologys";
import { AboutStudent } from "../AboutStudent/AboutStudent";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

export const Landing = () => {
  return (
    <>
      <Main>
        <Hero />
        <Navigation />
        <Project />
        <Technologys />
        <AboutStudent />
      </Main>
      <Footer />
    </>
  );
};
