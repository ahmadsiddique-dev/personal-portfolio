import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);

    axios
      .post(
        `${import.meta.env.VITE_B_URL}/login`,
        {
          username: data.username,
          password: data.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        navigate("/dashboard")
        console.log(res);
      })
      .catch((error) => {
        console.error("Login error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-amber-500 text-center mb-6">
          Maintainer Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-1">Username</label>
            <input
              className="w-full neumorphic-input border px-3 py-2 rounded"
              id="username"
              {...register("username", {
                required: { value: true, message: "Required field" },
              })}
            />
            {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full neumorphic-input border px-3 py-2 rounded"
              id="password"
              {...register("password", {
                required: { value: true, message: "Required field" },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded-full hover:bg-amber-600 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
