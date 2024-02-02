/* eslint-disable react/prop-types */
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  // fetching movie data
  const trailer = useMovieTrailer(id);
  return (
    <div className="w-full h-full">
      <iframe
        src={`https://www.youtube.com/embed/${trailer.key}?&autoplay=1&mute=1&showinfo=0&controls=0&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full h-full bg-gradient-to-t from-black object-cover"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
