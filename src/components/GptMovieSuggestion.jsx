import { ArrowUpLeftFromCircle } from "lucide-react";
import { useMovies } from "../utils/store";
import { RectangleSkeleton } from "./SkeletonLoader";
import { IMG_CDN_URL } from "../utils/constants";

const GptMovieSuggestion = () => {
  const searchPageMoviesLoading = useMovies(
    (state) => state.searchPageMoviesLoading
  );
  const searchMovies = useMovies((state) => state.searchMovies);
  const searchText = useMovies((state) => state.searchText);

  if (searchPageMoviesLoading)
    return (
      <div className="h-full w-full pl-4">
        <RectangleSkeleton />
      </div>
    );

  return (
    <div className="text-white w-full h-full md:p-10 flex flex-col gap-4 bg-black md:-mt-12 -mt-5 sm:px-6">
      <h1 className="text-2xl pl-8 line-clamp-1">{searchText}</h1>
      <div className="w-full h-fit flex flex-wrap gap-4 sm:gap-5 justify-center">
        {searchMovies?.length != 0 ? (
          searchMovies?.map((val, idx) => {
            if (val?.poster_path)
              return (
                <div
                  className="w-[9rem] sm:w-[10rem] relative flex justify-center items-center"
                  key={idx}
                >
                  <img
                    src={IMG_CDN_URL + val?.poster_path}
                    className="rounded-sm h-full w-full"
                    alt=""
                  />
                  <div className="w-full h-full opacity-0 hover:opacity-100 transition-all duration-300 absolute z-30 flex bg-[#0f0f0fb2] justify-center items-center cursor-pointer">
                    <ArrowUpLeftFromCircle className="text-white absolute z-40" />
                  </div>
                </div>
              );
          })
        ) : searchText != null ? (
          <h1 className="text-5xl ml-3">No Movies, series found 🥺</h1>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
