import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Browse from "../pages/Browse";
import Login from "./Login";
import GptSearchPage from "../pages/GptSearchPage";
import Header from "./Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Browse />,
        },
        {
          path: "search",
          element: <GptSearchPage />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
