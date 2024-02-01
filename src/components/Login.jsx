/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./Header";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../utils/store";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSignInForm, setIsSignInForm] = useState("signin");
  const navigate = useNavigate();

  // Handling the form submit
  const onSubmit = (data) => {
    // let id = toast.loading("Submitting");0
    navigate("/browse");
    // setTimeout(() => {
    //   toast.dismiss(id);
    //   toast.success("Login Successfull");
    // }, 2000);
  };

  // toggling the login and signup state
  const toggleTheAuthForm = (e) => {
    e.preventDefault();
    setIsSignInForm(isSignInForm == "signin" ? "signup" : "signin");
  };
  return (
    <div className="w-full h-[150vh] overflow-x-hidden">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
        className="absolute z-20 w-[10rem] top-4 left-10 object-contain"
      />
      {/* bg Image */}
      <div className="w-full h-full overflow-x-hidden">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="w-full h-[150vh] absolute top-0 z-10 bg-black opacity-70"></div>
      </div>
      {/* Login Form */}
      <div className="absolute z-20 w-full h-full overflow-x-hidden flex justify-center items-end top-0">
        <form
          className="absolute w-[28rem]  h-[80%] bg-[#000000b0] text-white p-[4rem] flex flex-col gap-[1.5rem] rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-3xl font-semibold">
            {isSignInForm === "signin" ? "Sign In" : "Sign Up"}
          </h1>
          <div>
            {/* name */}
            {isSignInForm === "signup" && (
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full py-3 px-3 my-2 rounded-sm bg-[#333333] text-[#8C8B78"
                  {...register("name", {
                    required: "Enter name",
                  })}
                />
                {errors.name && (
                  <div className="text-red-600 text-[0.8rem] -mt-[0.5rem]">
                    {errors.name.message}
                  </div>
                )}
              </div>
            )}
            {/* email */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full py-3 px-3 my-2 rounded-sm bg-[#333333] text-[#8C8B78] outline-none"
                {...register("email", {
                  required: "Enter email..",
                  pattern: {
                    value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="text-red-600 text-[0.8rem] -mt-[0.5rem]">
                  {errors.email.message}
                </div>
              )}
            </div>
            {/* password */}
            {isSignInForm === "signin" ? (
              <div className="flex flex-col gap-1">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-3 my-2 px-3 rounded-sm bg-[#333333] text-[#8C8B78] outline-none"
                  {...register("password", {
                    required: "Enter Password",
                  })}
                />
                {errors.password && (
                  <div className="text-red-600 text-[0.8rem] -mt-[0.5rem]">
                    {errors.password.message}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-3 my-2 px-3 rounded-sm bg-[#333333] text-[#8C8B78"
                  {...register("passwordsignup", {
                    required: "Enter Password",
                    pattern: {
                      value:
                        /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
                      message:
                        "Password should have one small letter, capital and number and 7 characters",
                    },
                  })}
                />
                {errors.passwordsignup && (
                  <div className="text-red-600 text-[0.8rem] -mt-[0.5rem]">
                    {errors.passwordsignup.message}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="my-5">
            <button
              className="w-full flex justify-center items-center py-3 my-2 px-3 rounded-sm bg-[#E50914] hover:bg-[#c40711] transition-all duration-300"
              type="submit"
            >
              {isSignInForm === "signin" ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <input type="checkbox" id="check" className="w-4" />
                <label
                  htmlFor="check"
                  className="cursor-pointer text-[0.8rem] text-[#8c8c8c] font-medium"
                >
                  Remember me
                </label>
              </div>
              <p className="cursor-pointer text-[0.8rem] text-right text-[#8c8c8c] font-medium">
                Need help?
              </p>
            </div>
          </div>
          <p className="text-[#575757] text-[1rem] font-medium flex justify-between">
            {isSignInForm === "signin" ? (
              <>
                New to Netflix?{" "}
                <button
                  className="text-white hover:underline transition-all duration-300 font-medium w-[6rem]"
                  onClick={toggleTheAuthForm}
                >
                  Sign up Now
                </button>
              </>
            ) : (
              <>
                Already a customer?{" "}
                <button
                  className="text-white hover:underline transition-all duration-300 font-medium w-[6rem]"
                  onClick={toggleTheAuthForm}
                >
                  Sign In Now
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
