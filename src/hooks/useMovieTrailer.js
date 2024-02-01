import { useEffect, useState } from "react";
import { options } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const [trailer, setTrailer] = useState("");

  // fetching trailer
  const getMovieVideo = async () => {
    const res = await fetch(
      `
https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );

    const data = await res.json();
    const filteredTrailer = data.results.find((val) => {
      return val.type == "Trailer";
    });

    // checking corner case!
    // that if trailer is not present!
    const isPresent = filteredTrailer.length
      ? filteredTrailer
      : data.results[0];

    console.log(isPresent);
    setTrailer(isPresent);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return trailer;
};

export default useMovieTrailer;
