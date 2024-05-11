import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Hero from "./components/Hero";
import MostPopularProducts from "./components/MostPopularProducts";
import Navbar from "./components/Navbar";
import SocialMediaSection from "./components/SocialMediaSection";

import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MostPopularProducts />
      <Testimonials />
      <SocialMediaSection />
      <Contact />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default App;
