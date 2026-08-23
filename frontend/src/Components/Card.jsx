import React from "react";

const Card = () => {
  const list = [1, 2, 3];
  return (
    <div className="grid grid-cols-3 gap-5 h-auto flex-wrap justify-center items-center py-10 ">
      {list.map((elem,idx) => {
        return (
          <div key={idx} className="p-3 rounded-lg bg-background shadow-md hover:scale-101 transition-all shadow-button hover:shadow-lg flex text-text flex-col gap-2">
            <div className="w-full h-60">
              <img
                className="w-full h-full object-center object-cover "
                src="https://i.pinimg.com/1200x/e9/6f/2c/e96f2c40e00e2d32e9d16a79776ad18b.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className=" text-2xl font-bold">Espresso</p>
              <p className="text-wrap">
                Bold and intenes with rich chocolate notes.
              </p>
            </div>
            <div className="flex justify-between items-center px-2">
              <p className="font-bold text-lg">₹ 150</p>
              <button className="bg-button px-8 py-1 rounded-md font-semibold">
                add to card
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
