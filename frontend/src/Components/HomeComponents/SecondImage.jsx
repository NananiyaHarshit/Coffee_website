import { ArrowRight } from "lucide-react";
import React from "react";

const SecondImage = () => {
  return (
    <div className="w-full h-auto px-10 py-10 bg-text">
      <div className="w-full h-auto bg-background rounded-lg flex justify-center items-center shadow-md shadow-background">
        <div className="w-1/2">
          <img
            className="rounded-l-lg"
            src="https://m.media-amazon.com/images/I/612wc049lXL.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col w-1/2 h-auto px-10 text-text gap-7 items-start justify-center">
          <p className="text-lg font-semibold">OUR STORY</p>
          <p className="text-3xl">More Than Cottee. It's a Ritual.</p>
          <p className="w-3/4 text-md">
            At Noiré, we believe coffee is more than a drink -it's a moment, a
            ritual, a way of life. From bean to cup. we craft experiences that
            stay with you.
          </p>
          <button className="flex justify-evenly bg-button px-10 py-3 w-1/2 rounded-lg font-semibold  hover:shadow-[0px_0px_15px_3px] hover:shadow-button/50  hover:bg-background  hover:ring-3 ring-button">
            Discover <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondImage;
