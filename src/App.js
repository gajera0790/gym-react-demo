import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./Components/Header/Header";
import Exercises from "./Components/UI/Exercises";
import Footer from "./Components/UI/Footer";
import Hero from "./Components/UI/Hero";
import Pricing from "./Components/UI/Pricing";
import Start from "./Components/UI/Start";
import Testimonials from "./Components/UI/Testimonials";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
