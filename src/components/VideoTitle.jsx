/* eslint-disable react/prop-types */
import { FaRegCirclePlay } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 lg:pt-36 px-4 lg:px-12 absolute text-white h-full bg-gradient-to-r from-black flex flex-col justify-center">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
      <p className="text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] mb-3 lg:mb-6 lg:mt-2 lg:w-[40%] w-[60%] line-clamp-2">
        {overview}
      </p>
      <div className="flex gap-2">
        <button
          className="py-2 bg-white w-[6rem]
        md:w-[8rem] lg:w-[10rem] border flex justify-center items-center text-black hover:bg-transparent hover:text-white transition-all duration-300
        "
        >
          <p className="">Play</p>
          <FaRegCirclePlay className="-ml-10 md:-ml-16 lg:-ml-24 mt-[0.2rem]" />
        </button>
        <button className="w-[6rem] md:py-1 lg:py-2 border md:w-[8rem] lg:w-[10rem]">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
