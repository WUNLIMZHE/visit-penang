import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Brochure from "./Component/Brochure/Brochure";
import Program from "./Component/Program/Program";
import Title from "./Component/Title/Title";
import About from "./Component/About/About";

const App = () => {
  return (
    <div>
      <h1 className="text-xl font-bold underline text-center m-10 text-blue-600">Hello world!</h1>
      <Navbar />
      <Brochure />
      <div className="container">
        <Title
          subTitle="What we have"
          title="Penang is not just a place to visit, it is a living experience, a feast for the senses, and a celebration of coexistence, where every step tells a story."
        />
        <Program />
        <About />
        <Title subTitle="Gallery" title="More about Penang" />
      </div>
    </div>
  );
};

export default App;
