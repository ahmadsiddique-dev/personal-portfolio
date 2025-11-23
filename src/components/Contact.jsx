import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import messageStore from "../zustand/messageStore";

const Contact = () => {
  const [loader, setLoader] = useState(false);
  const { detail, inc } = messageStore()
  const [data, setData] = useState({
    show: false,
    name: "",
    status: "",
  }); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const contactItems = [
    { name: <MdEmail />, slug: "" },
    { name: <FaLinkedin />, slug: "" },
    { name: <FaGithub />, slug: "" },
    { name: <FaFacebook />, slug: "" },
  ];

  const onSubmit = async (formData) => {
    setLoader(true);
    const { name, email, message } = formData;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_B_URL}/message`,
        { name, email, message }
      );

      setData({
        show: true,
        name: response.data.response.name,
        status: "ok",
      });
      setLoader(false);

      setTimeout(() => {
        setData({ show: false, name: "", status: "" });
      }, 15000);
    } catch (error) {
      console.error(error);
      setLoader(false);
      setData({ show: true, name: "", status: "error" });

      setTimeout(() => {
        setData({ show: false, name: "", status: "" });
      }, 15000);
    }
  };

  return (
    <center>
      <section className="w-full py-12 px-4">
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-bold text-white bg-amber-500 inline-block px-6 py-3 rounded-lg shadow-lg">
            Have a Query?
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-6 mt-10 max-w-5xl mx-auto">
          
          <div className="md:col-span-6 bg-amber-500 text-white flex flex-col justify-center p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">If You Follow...</h3>
            <ul className="flex justify-center items-center gap-3.5">
              {contactItems.map((e, i) => (
                <li key={i}>
                  <a href={e.slug} className="text-4xl">
                    {e.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-white rounded-full"></span>
                <p className="text-white/90">Response in 24 hours.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-white rounded-full"></span>
                <p className="text-white/90">Sometimes Late.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-white rounded-full"></span>
                <p className="text-white/90">Generous Response.</p>
              </div>
            </div>
          </div>

          <form
            className="md:col-span-6 w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col text-start gap-1">
              <label htmlFor="name" className="font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                className="px-3 neumorphic-input py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                {...register("name", {
                  required: { value: true, message: "Please enter your name." },
                  maxLength: {
                    value: 30,
                    message: "Must be less than 30 characters.",
                  },
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-start font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="neumorphic-input px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                {...register("email", {
                  required: { value: true, message: "Email is required." },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            <div className="flex flex-col text-start gap-1">
              <label htmlFor="message" className="font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="px-3 neumorphic-input py-2 rounded-lg! border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                {...register("message", {
                  required: { value: true, message: "Message is required." },
                })}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message.message}</span>
              )}
            </div>

            {data.show && (
              data.status === "ok" ? (
                <span className="text-[11px]">
                  MR/MRS {data.name}, track your message{" "}
                  <Link
                    to="/messages"
                    className="text-blue-500 underline underline-offset-3 hover:decoration-wavy decoration-amber-400"
                  >
                    here
                  </Link>
                </span>
              ) : (
                <span className="text-red-500 text-[11px]">
                  ERROR :: Message not sent.
                </span>
              )
            )}

            <button
              disabled={loader}
              type="submit"
              className={`mt-2 bg-amber-500 text-white py-2 rounded-lg font-medium 
              transition-all duration-200
              ${loader ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-600"}`}
            >
              {loader ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </center>
  );
};

export default Contact;
