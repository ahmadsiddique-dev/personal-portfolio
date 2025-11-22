import React, { useState } from "react";
import axios from "axios";
import {
  IoCopyOutline,
  IoCheckmarkDone,
  IoClose,
  IoTrashOutline,
} from "react-icons/io5";

const Dashboard = ({ userData }) => {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleAction = async (_id) => {
    const res = await axios.put(`${import.meta.env.VITE_B_URL}/update-status`, {
      _id,
    });
  };

  const handleDelete = (_id) => {
    console.log("ID : ", _id)
      axios.delete(
        `${import.meta.env.VITE_B_URL}/delete-message`,
        { data: { _id } }
      )
      .then((res) => {
          console.log(res.data);
      })  
      .catch((error) => {
        console.log(error)
      }) 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
        Dashboard
      </h1>

      <div className="flex flex-col gap-4">
        {userData.map((user) => (
          <div
  key={user._id}
  className="bg-white p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 max-w-[750px] mx-auto w-full group"
>
  {/* HEADER */}
  <div className="flex items-start justify-between">
    <div>
      <p className="text-xl font-semibold text-gray-900 group-hover:text-black transition">
        {user.name}
      </p>

      <div className="flex items-center mt-1 gap-2 text-sm text-gray-600 relative">
        <span>{user.email}</span>

        <button
          onClick={() => copyToClipboard(user.email, user._id)}
          className="p-1 hover:bg-gray-200 rounded-full transition active:scale-90"
        >
          <IoCopyOutline
            size={18}
            className={`transition-all ${
              copiedId === user._id ? "text-green-500 scale-110" : "text-gray-500"
            }`}
          />
        </button>

        {copiedId === user._id && (
          <span className="absolute -top-7 left-16 bg-black text-white text-xs px-2 py-1 rounded opacity-90 animate-fadeIn">
            Copied!
          </span>
        )}
      </div>
    </div>

    {/* STATUS BADGE */}
    <div
      className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-sm ${
        user.track
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {user.track ? "Seen" : "Not Seen"}
      {user.track ? (
        <IoCheckmarkDone size={14} />
      ) : (
        <IoClose size={14} />
      )}
    </div>
  </div>

  {/* MESSAGE */}
  <p className="mt-4 text-gray-700 text-[15px] bg-gray-50 p-4 rounded-xl border border-gray-200 leading-relaxed">
    {user.message}
  </p>

  {/* BUTTONS */}
  <div className="mt-4 flex gap-3">
    {/* UPDATE */}
    <button
      onClick={() => handleAction(user._id)}
      className="
        p-3 rounded-full bg-amber-100 text-amber-600
        hover:bg-amber-200 shadow-sm hover:shadow-md
        transition-all active:scale-90
      "
    >
      <IoCheckmarkDone size={20} className="animate-pulse" />
    </button>

    {/* DELETE */}
    <button
      onClick={() => handleDelete(user._id)}
      className="
        p-3 rounded-full bg-red-100 text-red-600
        hover:bg-red-200 shadow-sm hover:shadow-md
        transition-all active:scale-90
      "
    >
      <IoTrashOutline size={20} className="animate-bounce" />
    </button>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default Dashboard;
