import Header from "../components/Header";
import MainMovieContainer from "../components/MainMovieContainer";
import SubMoviesContainer from "../components/SubMoviesContainer";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";

const Browse = () => {
  // calling the hook which will fetch the now playing movies data
  useNowPlayingMovie();

  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SubMoviesContainer />
    </div>
  );
};

export default Browse;
