import React from "react";
import Navbar from "../Components/Navbar";
import HomeImage from "../Components/HomeComponents/HomeImage";
import Favorites from "../Components/HomeComponents/Favorites";
import SecondImage from "../Components/HomeComponents/SecondImage";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HomeImage />
      <div className="px-10 pt-10 bg-text">
        <div className="w-full h-px rounded-full bg-button"></div>
      </div>
      <Favorites />
      <div className="px-10 pt-10 bg-text">
        <div className="w-full h-0.5 rounded-full bg-button"></div>
      </div>
      <SecondImage />
      <Footer />
    </div>
  );
};

export default Home;
