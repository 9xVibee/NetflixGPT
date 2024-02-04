import { Skeleton } from "primereact/skeleton";
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
// import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

export const RectangleSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-2 text-xl uppercase -mt-2 pl-4 md:pl-5 mb-4 pb-4 w-full">
        <Skeleton height="2.5rem" width="16rem" className="mb-2"></Skeleton>
        <div className="flex gap-1 sm:gap-4 w-full h-fit flex-wrap">
          {Array(18)
            .fill("")
            .map((_, index) => (
              <Skeleton
                width="10.2rem"
                height="16rem"
                borderRadius="4px"
                key={index}
              ></Skeleton>
            ))}
        </div>
      </div>
    </>
  );
};

export const MainContainerMovies = () => {
  return (
    <>
      <div className="flex flex-col gap-2 text-xl uppercase mt-12 md:mt-8 mb-4 pl-4 lg:pl-10 py-4 pb-4 w-full overflow-scroll">
        <Skeleton height="2rem" width="16rem" className="mb-2"></Skeleton>
        <div className="flex gap-4 w-full overflow-x-scroll">
          {Array(7)
            .fill("")
            .map((_, index) => (
              <Skeleton
                width="20vw"
                height="16rem"
                borderRadius="4px"
                key={index}
                className="min-w-[42vw] md:min-w-[17vw] lg:min-w-[10vw]"
              ></Skeleton>
            ))}
        </div>
      </div>
    </>
  );
};

export const MainMovieSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-2 text-xl uppercase w-full overflow-scroll h-[100vh] relative z-50">
        <div className="flex gap-4 w-full h-[100vh] overflow-x-scroll">
          {Array(1)
            .fill("")
            .map((_, index) => (
              <Skeleton
                width="100vw"
                height="100vh"
                borderRadius="4px"
                key={index}
                className="w-full h-full"
              ></Skeleton>
            ))}
        </div>
      </div>
    </>
  );
};
