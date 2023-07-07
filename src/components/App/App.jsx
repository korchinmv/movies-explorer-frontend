import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { Main } from "../Main/Main";
import { Navigation } from "../Navigation/Navigation";
import { Project } from "../Project/Project";
import { Technologys } from "../Technologys/Technologys";
import { AboutStudent } from "../AboutStudent/AboutStudent";
import { Footer } from "../Footer/Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='page'>
      <Header />
      <Main>
        <Hero />
        <Navigation />
        <Project />
        <Technologys />
        <AboutStudent />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
