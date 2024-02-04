/* eslint-disable react/prop-types */
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useMovies } from "../utils/store";
import { MainMovieSkeleton } from "./SkeletonLoader";

const VideoBackground = ({ id }) => {
  const mainContainerDataLoading = useMovies(
    (state) => state.mainContainerDataLoading
  );
  // fetching movie data
  const trailer = useMovieTrailer(id);

  if (mainContainerDataLoading) return <MainMovieSkeleton />;
  return (
    <div className="w-full h-full overflow-hidden bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${trailer.key}?&autoplay=1&mute=1&showinfo=0&controls=0&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-[60rem] md:w-full h-full md:-mt-[0rem] -mt-[1rem] bg-gradient-to-t from-black object-contain"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
