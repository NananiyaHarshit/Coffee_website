import React from "react";
import Navbar from "../Components/Navbar";
import cold from "../Photos/download.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "../Components/Footer";
const Contact = () => {
  console.log(cold);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandle = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-center items-center">
        <div className="w-1/2 h-[86vh] flex flex-col justify-center gap-10 items-center">
          <div className="text-background w-full  gap-2 flex flex-col justify-start items-start px-20 ">
            <p className="text-4xl font-semibold">Contact Us</p>
            <p className="text-yellow-500 font-semibold">
              LOREM IPSUM IS SIMPLY dummy text of the printing and type setting
              industry.
            </p>
            <p>
              very since the 1500s, when an unknown printer took a galley of
              type and scrambled.
            </p>
          </div>
          <div className="px-20 w-full">
            <form
              onSubmit={handleSubmit(formHandle)}
              action=""
              className="flex flex-col gap-10"
            >
              <div className="flex flex-col gap-1 w-1/2">
                <input
                  type="text"
                  className="px-1 py-1 ring-2 rounded-md ring-background"
                  placeholder="name"
                  {...register("name", {
                    required: { value: true, message: "fill the email field" },
                  })}
                />
                <span className="text-xs text-red-500">
                  {errors.name && <p>{errors.name.message}</p>}
                </span>
                <input
                  type="text"
                  className="px-1 py-1 ring-2 rounded-md ring-background"
                  placeholder="email"
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

                <textarea
                  name=""
                  id=""
                  className="px-1 py-1 ring-2 rounded-md ring-background"
                  placeholder="message.."
                  rows="2"
                  {...register("msg", {
                    required: { value: true, message: "fill the email field" },
                  })}
                ></textarea>
                <span className="text-xs text-red-500">
                  {errors.msg && <p>{errors.msg.message}</p>}
                </span>
              </div>
              <div>
                <button className="ring-3 ring-background font-semibold text-text bg-button w-1/2 py-2 rounded-md">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[20%] bg-red-200 h-[86vh] flex flex-col justify-center items-center ">
          <img className="w-full h-full" src={cold} alt="img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
