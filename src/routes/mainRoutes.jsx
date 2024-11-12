import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "@/components/layouts/HomeLayout";
import LandingPage from "@/pages/LandingPage";
import PageNotFound from "@/pages/PageNotFound";
import ProjectPage from "@/pages/ProjectPage";
import CertificationPage from "@/pages/CertificationPage";

export const mainRoutes = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />,
  },

  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "project",
        element: <ProjectPage />,
      },
      
    ],
    
  },
  {
    path: "certification",
    element: <CertificationPage />,
  },
]);
