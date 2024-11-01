import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { mainRoutes } from "./routes/mainRoutes.jsx";
import { RouterProvider } from "react-router-dom";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={mainRoutes} />
  </StrictMode>
);
