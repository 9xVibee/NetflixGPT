import GptMovieSuggestion from "../components/GptMovieSuggestion";
import GptSearch from "../components/GptSearch";

const GptSearchPage = () => {
  return (
    <div className="overflow-hidden w-full h-[100vh] flex flex-col items-center justify-center bg-black">
      <GptSearch />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
