/* eslint-disable react/prop-types */
import { FaRegCirclePlay } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/2">{overview}</p>
      <div className="flex gap-2">
        <button
          className="py-2 bg-white
        w-[10rem] border flex justify-center items-center
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
