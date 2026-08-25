import React from "react";
import Card from "../Card";
import { ArrowRight } from "lucide-react";

const Favorites = () => {
  const list = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-col gap-5 w-full h-auto px-20 bg-text">
      <div></div>
      <div>
        <p className="capitalize text-yellow-500 font-bold text-3xl">
          Our favorites
        </p>
      </div>
      <div className="flex justify-between  text-background items-center">
        <p className="capitalize  font-bold text-3xl">featured Coffee</p>
        <p className="text-3xl font-bold"><ArrowRight /></p>
      </div>
      <div>
        <Card limit={3} />
      </div>
    </div>
  );
};

export default Favorites;
