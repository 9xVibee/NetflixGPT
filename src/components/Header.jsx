import { useUserDetails } from "../utils/store";

const Header = () => {
  const user = useUserDetails((state) => state.user);
  return (
    <div className="absolute w-full bg-gradient-to-b from-black flex justify-between items-center px-2 md:px-2 lg:px-8 py-4 z-30">
      <div>
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
          className="w-[8rem] fill-[#e50914] relative z-10"
        />
      </div>
      {user && (
        <div className="w-fit">
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
