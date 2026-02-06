import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../pages/WebLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Careers from "../pages/Carrers";
import About from "../pages/About";
import Explore from "../pages/Explore";
import UniversityDetail from "../pages/UniversityDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "kariyer", element: <Careers /> },
      { path: "hakkinda", element: <About /> },
      { path: "universite", element: <Explore /> },
      { path: "universite/:isim", element: <UniversityDetail /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
