import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Projects from "./components/Projects.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Messages from "./components/Messages.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/MaintainerLogin.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

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
    path : "/login",
    element : <Login />,
    
  },
  {
    path : "/dashboard",
    element : (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
