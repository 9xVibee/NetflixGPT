import { useNowPlayingMovies } from "../utils/store";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainMovieContainer = () => {
  const nowPlayingMovies = useNowPlayingMovies(
    (state) => state?.nowPlayingMovies
  );

  // checking if movies are null (Early exist)
  if (!nowPlayingMovies) return;

  // getting random movie from 20 movies data :)
  let randomNum = Math.floor(Math.random() * 21);
  const mainMovie = nowPlayingMovies?.[randomNum];

  // extracting data
  const { title, overview, id } = mainMovie;
  return (
    <div className="w-full h-[100vh]">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainMovieContainer;