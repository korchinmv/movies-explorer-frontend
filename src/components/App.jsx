import React from "react";
import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import { Navigation } from "./Navigation/Navigation";

const App = () => {
  return (
    <div className='page'>
      <Header />
      <Hero />
      <Navigation />
    </div>
  );
};

export default App;
