import MainMovieContainer from "../components/MainMovieContainer";
import SubMoviesContainer from "../components/SubMoviesContainer";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";

const Browse = () => {
  // calling the hook which will fetch the now playing movies data
  useNowPlayingMovie("now_playing");
  useNowPlayingMovie("popular");
  useNowPlayingMovie("top_rated");
  useNowPlayingMovie("upcoming");

  return (
    <div className="flow-hide">
      <MainMovieContainer />
      <SubMoviesContainer />
    </div>
  );
};

export default Browse;
