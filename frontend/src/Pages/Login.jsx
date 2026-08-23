import React from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandle = (e) => {
    console.log(e);
  };

  return (
    <div className="bg-text flex w-full h-screen justify-center items-center">
      <div className="bg-background rounded-lg w-1/4 h-80 flex flex-col gap-7 justify-center items-center text-text">
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
                minLength:{ value: 6, message: "password is must be 6 digit or character"  }
              })}
            />
            <span className="text-xs text-red-500">
              {errors.password && <p>{errors.password.message}</p>}
            </span>
          </div>
          <button className="bg-button font-semibold tracking-[5px] border-2 border-text px-2 py-1 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
