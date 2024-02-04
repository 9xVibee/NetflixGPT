import { useMovies } from "../utils/store";
import MovieList from "./MovieList";
import { RectangleSkeleton } from "./SkeletonLoader";

const GptMovieSuggestion = () => {
  const tmdbGptMovies = useMovies((state) => state.tmdbGptMovies);
  const gptMovieNames = useMovies((state) => state.gptMovieNames);
  const searchPageMoviesLoading = useMovies(
    (state) => state.searchPageMoviesLoading
  );

  if (searchPageMoviesLoading)
    return (
      <div className="h-full w-full">
        <RectangleSkeleton />
        <RectangleSkeleton />
        <RectangleSkeleton />
        <RectangleSkeleton />
        <RectangleSkeleton />
      </div>
    );

  return (
    <div className="text-white md:p-4 bg-black h-fit -mt-12">
      {gptMovieNames?.map((val1, idx) => {
        return <MovieList title={val1} key={idx} movies={tmdbGptMovies[idx]} />;
      })}
    </div>
  );
};

export default GptMovieSuggestion;
