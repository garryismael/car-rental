import Blog from "../sections/Blog";
import ChooseUs from "../sections/ChooseUs";
import Hero from "../sections/Hero";
import Partner from "../sections/Partner";
import Subscribe from "../sections/Subscribe";
import Testimonial from "../sections/Testimonial";
import TopBook from "../sections/TopBook";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <ChooseUs />
      <Partner />
      <TopBook />
      <Blog />
      <Testimonial />
      <Subscribe />
    </>
  );
};

export default LandingPage;
