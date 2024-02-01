import { useEffect } from "react";
import { options } from "../utils/constants";
import { useNowPlayingMovies } from "../utils/store";

const useNowPlayingMovie = () => {
  const addNowPlayingMovies = useNowPlayingMovies(
    (state) => state?.addNowPlayingMovies
  );

  // Now Playing Movies
  const getNowPlayingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      const data = await res.json();
      addNowPlayingMovies(data.results);
    } catch (err) {
      console.log("Error in Browse Page ", err);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovie;
