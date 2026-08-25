import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LogOut, ShoppingBasket, User } from "lucide-react";
gsap.registerPlugin(useGSAP);
const Navbar = () => {
  const menuRef = useRef();
  const userEmail = sessionStorage.getItem("email");
  const [logout, setLogout] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const userList = JSON.parse(localStorage.getItem("user")) || [];
  const user = userList.find((item) => item.email === userEmail) || "";
  const linksRef = useRef();
  const tl = useRef();
  const navigate = useNavigate()

  useGSAP(() => {
    gsap.set(menuRef.current, {
      x: "100%",
    });

    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current
      .to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(linksRef.current, {
       
        x: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
      });
  });

  const handleToggle = () => {
    if (!toggleMenu) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
    setToggleMenu((prev) => !prev);
  };
// Login navbar 
  if (userEmail) {
    return (
      <>
        <div className="w-full h-20 overflow-hidden bg-background flex justify-between px-10 items-center">
          <div>
            <img
              className="w-15 h-15 rounded-full hover:animate-spin transition-all"
              src="https://i.pinimg.com/736x/65/e6/8a/65e68a09bb6549ad0439541fe702dc5e.jpg"
              alt="img"
            />
          </div>
          <div className="flex gap-10 text-text">
            <Link to="/"> Home </Link>
            <Link to="/coffee">Coffee menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <button
              className="px-5 rounded-lg text-text active:scale-95 active:bg-secondary/50 text-lg font-semibold"
              onClick={handleToggle}
            >
              {user.email}
            </button>
          </div>
        </div>  
        <div
          ref={menuRef}
          className="flex flex-col z-30 w-full absolute items-end"
        >
          <div
            ref={linksRef}
            className="w-1/5 rounded-lg text-text bg-button flex flex-col justify-start items-start"
          >
            <Link to="/profile" className="px-5 py-2 flex gap-2 inset-ring-1 w-full"><User />Profile</Link>
            <Link to="/cart" className="px-5 py-2 flex gap-2 inset-ring-1 w-full"><ShoppingBasket />Cart</Link>
            <button
              onClick={() => {
                setLogout((logout) => !logout);
                sessionStorage.clear();
                navigate('/')
                toast.success("logout successfully !");
              }}
              className="px-5 py-2 flex gap-2 inset-ring-1 w-full rounded-b-lg text-text active:scale-95 active:bg-secondary/50 text-lg font-semibold "
            ><LogOut />
              Logout
            </button>
          </div>
        </div>
      </>
    );
  }

  // logout navbar
  return (
    <div className="w-full h-20 bg-background flex justify-between px-10 items-center">
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
