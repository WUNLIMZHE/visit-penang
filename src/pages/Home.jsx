import React, { useRef } from "react";
import Navbar from "../Component/Navbar/Navbar";
import Brochure from "../Component/Brochure/Brochure";
import Program from "../Component/Program/Program";
import Title from "../Component/Title/Title";
import Gallery from "../Component/Gallery/Gallery"
import About from "../Component/About/About";

export default function Home() {
  const titleRef = useRef(null);

  const scrollToTitle = () => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY + rect.top - 100; // Subtract 20px from the calculated scroll position
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />
      <Brochure onExploreMore={scrollToTitle} />
      <div className="container">
        <Title
          ref={titleRef}
          subTitle="What we have"
          title="Penang is not just a place to visit, it is a living experience, a feast for the senses, and a celebration of coexistence, where every step tells a story."
        />
        <Program />
        <About />
        <Title subTitle="Gallery" title="More about Penang" />
        <Gallery/>
      </div>
    </>
  );
}
