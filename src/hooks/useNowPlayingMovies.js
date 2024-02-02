import { useEffect } from "react";
import { options } from "../utils/constants";
import { useMovies } from "../utils/store";

const useNowPlayingMovie = (movie_type) => {
  const addNowPlayingMovies = useMovies((state) => state?.addNowPlayingMovies);
  const addPopularMovies = useMovies((state) => state?.addPopularMovies);
  const addTopRated = useMovies((state) => state?.addTopRated);
  const addUpcoming = useMovies((state) => state?.addUpcoming);

  // Now Playing Movies
  const getNowPlayingMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_type}?language=en-US&page=1`,
        //  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
        options
      );
      const data = await res.json();

      switch (movie_type) {
        case "now_playing":
          addNowPlayingMovies(data.results);
          break;

        case "popular":
          addPopularMovies(data.results);
          break;

        case "top_rated":
          addTopRated(data.results);
          break;

        case "upcoming":
          addUpcoming(data.results);
          break;
      }
    } catch (err) {
      console.log("Error in Browse Page ", err);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovie;
