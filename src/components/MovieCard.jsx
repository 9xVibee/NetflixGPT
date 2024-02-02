/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from "../utils/constants";
import { motion } from "framer-motion";

const MovieCard = ({ url, idx }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      transition={{
        duration: 1,
        delay: idx / 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="flex flex-col w-full rounded-md cursor-pointer"
    >
      <div className="flex w-[11vw]">
        <img src={IMG_CDN_URL + url} className="rounded-sm" alt="" />
      </div>
    </motion.div>
  );
};

export default MovieCard;
