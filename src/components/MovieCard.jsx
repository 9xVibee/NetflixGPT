/* eslint-disable react/prop-types */
import { ArrowUpLeftFromCircle } from "lucide-react";
import { IMG_CDN_URL } from "../utils/constants";
import { motion } from "framer-motion";

const MovieCard = ({ url }) => {
  if (!url) return;

  return (
    <motion.div
      // initial={{
      //   opacity: 0,
      //   y: 100,
      // }}
      // transition={{
      //   duration: 1,
      //   delay: idx / 10,
      // }}
      // animate={{
      //   opacity: 1,
      //   y: 0,
      // }}
      className="flex flex-col rounded-md cursor-pointer"
    >
      <div className="flex w-[40vw] md:w-[16vw] lg:w-[12vw] relative">
        <img src={IMG_CDN_URL + url} className="rounded-sm" alt="" />
        <div className="w-full h-full opacity-0 hover:opacity-100 transition-all duration-300 absolute z-30 flex bg-[#0f0f0fb2] justify-center items-center">
          <ArrowUpLeftFromCircle className="text-white absolute z-40" />
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
