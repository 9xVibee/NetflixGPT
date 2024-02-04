import GptMovieSuggestion from "../components/GptMovieSuggestion";
import GptSearch from "../components/GptSearch";

const GptSearchPage = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center bg-black">
      <GptSearch />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
