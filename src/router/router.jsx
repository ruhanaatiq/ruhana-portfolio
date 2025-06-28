// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectDetails from "../page/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/project/:id", 
    element: <ProjectDetails />,
  },
]);
