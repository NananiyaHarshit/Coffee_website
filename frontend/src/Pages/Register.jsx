import React from "react";
import { useForm } from "react-hook-form";
import { Link , useNavigate } from "react-router-dom";

const register = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const formHandle = (e) => {
    console.log(e);
    navigate('/')
  };

  return (
    <div>
      <div className="bg-[url('https://i.pinimg.com/736x/65/cd/d1/65cdd1eceaf40f81cbc38d6851eb40e7.jpg')] w-full h-screen bg-bottom bg-cover z-0 absolute blur-xs"></div>

      <div className="z-10 absolute flex w-full bg-cover bg-bottom h-screen justify-center items-center px-4 sm:px-6 md:px-8">
        <div className="bg-button shadow-[0px_0px_30px_4px] shadow-background rounded-lg w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] h-auto py-8 sm:py-10 flex flex-col gap-7 justify-center items-center text-text">

          <p className="tracking-[2px] text-xl sm:text-2xl font-bold">
            Register From
          </p>

          <form
            onSubmit={handleSubmit(formHandle)}
            className="w-full flex flex-col gap-5 px-5 sm:px-8 md:px-10"
          >
            <div className="w-full flex flex-col gap-2">

              <input
                type="text"
                placeholder="Name"
                className="bg-secondary/50 outline-none border-2 border-text px-2 py-1 rounded-md w-full"
                {...register("name", {
                  required: { value: true, message: "fill the email field" },
                })}
              />

              <span className="text-xs text-red-500">
                {errors.name && <p>{errors.name.message}</p>}
              </span>

              <input
                type="text"
                placeholder="Email"
                className="bg-secondary/50 outline-none border-2 border-text px-2 py-1 rounded-md w-full"
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
                className="bg-secondary/50 outline-none border-2 border-text px-2 py-1 rounded-md w-full"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password filed is empty",
                  },
                  minLength: {
                    value: 6,
                    message: "password is must be 6 digit or character",
                  },
                })}
              />

              <span className="text-xs text-red-500">
                {errors.password && <p>{errors.password.message}</p>}
              </span>

              <input
                type="text"
                placeholder="Confirm Password"
                className="bg-secondary/50 outline-none border-2 border-text px-2 py-1 rounded-md w-full"
                {...register("confirm_pwd", {
                  required: {
                    value: true,
                    message: "password filed is empty",
                  },
                  minLength: {
                    value: 6,
                    message: "password is must be 6 digit or character",
                  },
                  validate: (value) =>
                    value == getValues("password") ||
                    "Passwords do not match",
                })}
              />

              <span className="text-xs text-red-500">
                {errors.confirm_pwd && (
                  <p>{errors.confirm_pwd.message}</p>
                )}
              </span>

            </div>

            <p className="w-full text-xs flex justify-between gap-2">
              have a account ?
              <Link to="/login" className="underline text-blue-600">
                Login
              </Link>
            </p>

            <button className="bg-background font-semibold tracking-[3px] sm:tracking-[5px] border-2 border-text px-2 py-1 rounded-md w-full">
              Login
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default register;