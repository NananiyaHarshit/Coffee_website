import React from "react";
import coffeeImg from "../../Photos/coffee_img.png";
console.log(coffeeImg);
const HomeImage = () => {
  return (
    <div className="w-full h-[80vh] bg-text flex justify-center items-center bg-cover">
      <div className="w-1/2 flex flex-col justify-center items-center gap-10">
        <div>
          <p className="text-7xl w-full text-left px-20 font-semibold">
            Brewed for the <span className="text-yellow-500">Bold.</span>
          </p>
          <p className="text-md w-full text-left px-20 font-semibold text-background">
            Premium coffee, roasted with precision and crafted for unforgettable
            moments.
          </p>
        </div>

        <div className="w-full flex gap-10 items-center px-20">
          <button className="bg-background hover:bg-button hover:shadow-lg hover:shadow-background/80 transition-all px-10 py-2 rounded-md text-text font-semibold text-lg ">
            shop Coffee
          </button>
          <button className="bg-background hover:bg-button hover:shadow-lg hover:shadow-background/80 transition-all px-10 py-2 rounded-md text-text font-semibold text-lg ">
            Explore
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img src={coffeeImg} alt="Coffee" className="" />
      </div>
    </div>
  );
};

export default HomeImage;
