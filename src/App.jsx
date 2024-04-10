import { useState } from "react";
import "./App.css";
import Header from "./app/sections/Header";
import Hero from "./app/sections/Hero";
import ChooseUs from "./app/sections/ChooseUs";
import Partner from "./app/sections/Partner";
import TopBook from "./app/sections/TopBook";
import Blog from "./app/sections/Blog";
import Testimonial from "./app/sections/Testimonial";
import Subscribe from "./app/sections/Subscribe";
import Footer from "./app/sections/Footer";

function App() {
  useState(0);

  return (
    <>
      <Header />
      <Hero />
      <ChooseUs />
      <Partner />
      <TopBook />
      <Blog />
      <Testimonial />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
