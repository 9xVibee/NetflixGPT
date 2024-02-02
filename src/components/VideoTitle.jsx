/* eslint-disable react/prop-types */
import { FaRegCirclePlay } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 absolute text-white h-full bg-gradient-to-r from-black flex flex-col justify-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-[1rem] mb-6 mt-2 w-[40%] line-clamp-2">{overview}</p>
      <div className="flex gap-2">
        <button
          className="py-2 bg-white
        w-[10rem] border flex justify-center items-center text-black hover:bg-transparent hover:text-white transition-all duration-300
        "
        >
          <p className="">Play</p>
          <FaRegCirclePlay className="-ml-24 mt-[0.2rem]" />
        </button>
        <button className="py-2 border w-[10rem]">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
