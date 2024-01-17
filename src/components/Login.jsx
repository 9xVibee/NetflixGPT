import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState("signin");

  const toggleTheAuthForm = (e) => {
    console.log("hmm");
    e.preventDefault();
    setIsSignInForm(isSignInForm == "signin" ? "signup" : "signin");
  };
  return (
    <div className="w-full h-[150vh]">
      <Header />
      {/* bg Image */}
      <div className="w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="w-full h-[150vh] absolute top-0 z-10 bg-[#00000086]"></div>
      </div>
      {/* Login Form */}
      <div className="absolute z-20 w-full h-[100%] flex justify-center items-end top-0">
        <form className="absolute w-[28rem]  h-[80%] bg-[#000000b0] text-white p-[4rem] flex flex-col gap-[1.5rem] rounded-md">
          <h1 className="text-3xl font-semibold">
            {isSignInForm === "signin" ? "Sign In" : "Sign Up"}
          </h1>
          <div>
            {isSignInForm === "signup" && (
              <input
                type="text"
                placeholder="Name"
                className="w-full py-3 px-3 my-2 rounded-sm bg-[#333333] text-[#8C8B78"
              />
            )}
            <input
              type="text"
              placeholder="Email Address"
              className="w-full py-3 px-3 my-2 rounded-sm bg-[#333333] text-[#8C8B78"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 my-2 px-3 rounded-sm bg-[#333333] text-[#8C8B78"
            />
          </div>
          <div className="my-5">
            <button className="w-full flex justify-center items-center py-3 my-2 px-3 rounded-sm bg-[#E50914]">
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
              <p className="cursor-pointer text-[0.8rem] text-[#8c8c8c] font-medium">
                Need help?
              </p>
            </div>
          </div>
          <p className="text-[#575757] text-[1rem] font-medium">
            {isSignInForm === "signin" ? (
              <>
                New to Netflix?{" "}
                <button
                  className="text-white hover:underline transition-all duration-300 font-medium"
                  onClick={toggleTheAuthForm}
                >
                  Sign up Now
                </button>
              </>
            ) : (
              <>
                Already a customer?{" "}
                <button
                  className="text-white hover:underline transition-all duration-300 font-medium"
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
