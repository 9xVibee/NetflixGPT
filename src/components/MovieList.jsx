/* eslint-disable react/prop-types */

import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="flex flex-col gap-2 text-xl uppercase pl-4 lg:pl-10 py-4 pb-4 relative z-20 w-full">
      <div>
        <h1 className="text-white">{title}</h1>
      </div>
      <div className="flex gap-4 w-full flow-hide">
        {movies?.map((val, idx) => {
          return (
            <MovieCard
              url={movies[movies.length - idx - 1]?.poster_path}
              key={idx}
              idx={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
