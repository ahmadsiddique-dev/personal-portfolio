import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [userData, setUserData] = useState([])

  useEffect(() => {
      axios.post(`${import.meta.env.VITE_B_URL}/dashboard`, {}, { withCredentials: true })
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          setAuthorized(true)
          setUserData(res.data.data)
        };
      })
      .catch((error) => {
        setAuthorized(false)
        console.log("Error",error)
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!authorized) return <Navigate to="/login" replace />;

  return React.cloneElement(children, { userData });
};

export default ProtectedRoute;
