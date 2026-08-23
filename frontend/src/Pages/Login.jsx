import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  
  const navigate =  useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandle = (e) => {
    console.log(e);
    navigate('/ ')
  };

  return (
    <div>
      <div className="bg-[url('https://i.pinimg.com/736x/65/cd/d1/65cdd1eceaf40f81cbc38d6851eb40e7.jpg')] w-full h-screen bg-bottom bg-cover z-0 absolute blur-xs"></div>
      <div className=" z-10 absolute flex w-full bg-cover bg-bottom h-screen justify-center items-center ">
        <div className="bg-button shadow-[0px_0px_30px_4px] shadow-background rounded-lg w-1/4 h-80 flex flex-col gap-7 justify-center items-center text-text">
          <p className="tracking-[5px] text-2xl font-bold">Login From</p>
          <form
            onSubmit={handleSubmit(formHandle)}
            className="w-full flex flex-col gap-5 px-10"
          >
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                placeholder="Email"
                className="bg-secondary/50 outline-none border-2 border-text px-2 py-1 rounded-md"
                {...register("email", {
                  required: { value: true, message: "fill the email field" },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              <span className="text-xs text-red-500">
                {errors.email && <p>{errors.email.message}</p>}
              </span>
              <input
                type="text"
                placeholder="Password"
                className="bg-secondary/50 outline-none border-2 border-text px-2 py-1 rounded-md"
                {...register("password", {
                  required: { value: true, message: "password filed is empty" },
                  minLength: {
                    value: 6,
                    message: "password is must be 6 digit or character",
                  },
                })}
              />
              <span className="text-xs text-red-500">
                {errors.password && <p>{errors.password.message}</p>}
              </span>
            </div>{" "}
            <p className="w-full text-xs flex justify-between">
              Don't have a account?{" "}
              <Link to='/register' className="underline text-blue-600">Register</Link>
            </p>
            <button className="bg-background font-semibold tracking-[5px] border-2 border-text px-2 py-1 rounded-md">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
