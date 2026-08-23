import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-20  bg-background flex justify-between px-10 items-center">
      <div>
        <img
          className="w-15 h-15 rounded-full"
          src="https://i.pinimg.com/736x/65/e6/8a/65e68a09bb6549ad0439541fe702dc5e.jpg"
          alt="img"
        />
      </div>
      <div className="flex gap-10 text-text">
        <Link to="/"> Home </Link>
        <Link to="/coffee">Coffee</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Link to="/login">
          <button className="bg-button hover:bg-background  hover:ring-3 hover:shadow-[0px_0px_15px_3px] shadow-button ring-button px-8 py-2 rounded-lg text-text active:scale-95 active:bg-secondary/50 text-lg font-semibold ">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
