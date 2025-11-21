import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Projects from "./components/Projects.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Messages from "./components/Messages.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/MaintainerLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    
  },
  {
    path: "/project", 
    element: <Projects />,
  },
  {
    path : "/messages",
    element : <Messages />
  }, 
  {
    path : "/dashboard",
    element : <Login />,
    children : [
      {
        path : "manager",
        element : <Dashboard />
      }
    ]

  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
