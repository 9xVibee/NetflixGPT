import GptMovieSuggestion from "../components/GptMovieSuggestion";
import GptSearch from "../components/GptSearch";

const GptSearchPage = () => {
  return (
    <div className="w-[100vw] h-[200vh] flex flex-col items-center bg-black">
      <GptSearch />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
