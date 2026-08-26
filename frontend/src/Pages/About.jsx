import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div className="bg-text w-full h-screen">
      <Navbar />
      <div className="flex w-full h-[80%] justify-center items-center py-10">
        <div className="flex flex-col justify-center items-center w-full gap-7 ">
          <p className="text-5xl font-semibold font-ranchers tracking-widest">
            About Us <span className="text-yellow-500">Our Story</span>
          </p>
          <p className="flex flex-col w-[70%] text-center gap-5 text-background font-semibold">
            <span>
              At Coffee Time, we believe that every cup of coffee tells a story.
              From the sun-drenched hills of Ethiopia to the farms in Colombia,
              we source the highest-quality beans from around the globe. Our
              mission is simple to provide exceptional coffee experiences for
              every sip.
            </span>
            <span>
              Whether you're a seasoned espresso aficionado or a casual coffee
              drinker, we have a blend that's perfect for you. Our roasting
              process ensures that each batch is roasted to perfection, bringing
              out the unique flavors and aromas that make coffee such an
              exciting beverage.
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
