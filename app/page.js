import Image from "next/image";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Banner from "./components/Banner";
import HeroBanner from "./components/Banner";

// import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Feature />
      <HeroBanner />
      <Services />
      <Testimonial />
    </div>
  );
}
