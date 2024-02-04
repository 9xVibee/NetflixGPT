import { Search } from "lucide-react";
import { useMovies, useUserDetails } from "../utils/store";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useUserDetails((state) => state.user);
  const addSearchMovies = useMovies((state) => state.addSearchMovies);
  const handleClearSearch = () => {
    addSearchMovies({
      movies: null,
      title: null,
    });
  };
  return (
    <div className="absolute w-full bg-gradient-to-b from-black flex justify-between items-center px-2 md:px-2 lg:px-10 py-2 z-30">
      <div>
        <Link to={"/"} onClick={handleClearSearch}>
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt=""
            className="w-[8rem] fill-[#e50914] relative z-10"
          />
        </Link>
      </div>
      {user && (
        <div className="w-fit flex items-center gap-3 md:gap-6 lg:gap-8 overflow-hidden">
          <Link to={"/search"}>
            <Search
              // size={"5px"}
              className="md:h-[2.5rem] h-[3rem] text-white transition-all duration-300"
            />
          </Link>
          <img
            src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
            alt=""
            className="w-10 h-10 shadow-2xl rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
