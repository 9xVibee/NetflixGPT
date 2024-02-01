/* eslint-disable react/prop-types */
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  // fetching movie data
  const trailer = useMovieTrailer(id);
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${trailer.key}?si=tguplqILQM-MNUMQ`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
