import { useMovies } from "../utils/store";
import MovieList from "./MovieList";
import { MainContainerMovies } from "./SkeletonLoader";

const SubMoviesContainer = () => {
  const movies = useMovies((state) => state.nowPlayingMovies);
  const popular = useMovies((state) => state.popular);
  const topRated = useMovies((state) => state.topRated);
  const upcoming = useMovies((state) => state.upcoming);
  const mainContainerDataLoading = useMovies(
    (state) => state.mainContainerDataLoading
  );

  if (mainContainerDataLoading)
    return (
      <div className="w-full bg-black -mt-16 z-10">
        <MainContainerMovies />
        <MainContainerMovies />
        <MainContainerMovies />
        <MainContainerMovies />
      </div>
    );

  return (
    <div className="w-full bg-black -mt-16 z-10">
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Popular"} movies={popular} />
      <MovieList title={"Top Rated"} movies={topRated} />
      <MovieList title={"Upcoming"} movies={upcoming} />
    </div>
  );
};

export default SubMoviesContainer;
