import { Search } from "lucide-react";
import { useRef } from "react";
import openai from "../utils/openai";
import { options } from "../utils/constants";
import { useMovies } from "../utils/store";

const GptSearch = () => {
  const addGptMovies = useMovies((state) => state.addGptMovies);
  const setSearchPageMovieLoading = useMovies(
    (state) => state.setSearchPageMovieLoading
  );
  const searchTextValue = useRef(null);

  // Searching movie in tmdb
  const searchMovieInTMDB = async (movieName) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      options
    );

    const data = await res.json();
    return data;
  };
  // handling the search
  const handleSearch = async () => {
    setSearchPageMovieLoading(true);
    try {
      // making a proper query for movie recommendation
      const gptQuery = `Act as a Movie Recommendation system and Suggest some movies for the query: ${searchTextValue.current.value}. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Krissh, Golmaal`;

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      const gptMovies = gptResults.choices[0].message.content.split(",");
      const promiseArray = gptMovies.map((movie) => searchMovieInTMDB(movie));

      const tmdbMovieResults = (await Promise.all(promiseArray)).map(
        (val) => val?.results
      );
      addGptMovies({
        movieNames: gptMovies,
        tmdbMovies: tmdbMovieResults,
      });
      setSearchPageMovieLoading(false);
    } catch (error) {
      console.log("Error in GptSearch comp: " + error);
    }
  };

  return (
    <div className="p-6 m-6 w-full mt-14 lg:mt-10 relative top-0">
      <div className="flex items-center justify-between bg-gray-100 rounded-sm md:w-[90%] lg:w-[50%] mx-auto py-1">
        <input
          type="text"
          className="w-[100%] md:w-[80%] py-1 px-2 outline-none bg-gray-100"
          placeholder="What would you like to watch today?"
          ref={searchTextValue}
          onKeyDown={(e) => {
            if (e.keyCode == 13) handleSearch();
          }}
        />
        <button className="w-[3rem]" onClick={handleSearch}>
          <Search
            size={24}
            className="transition-all duration-300 hover:text-red-600"
          />
        </button>
      </div>
    </div>
  );
};

export default GptSearch;
