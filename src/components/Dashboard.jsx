import React, { useState } from "react";
import axios from "axios";
import { IoCopyOutline, IoCheckmarkDone, IoClose, IoTrashOutline } from "react-icons/io5";

const Dashboard = ({ userData }) => {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleAction = async (_id) => {
    try {
      const res = await axios.put(
        "http://localhost:8000/api/v1/update-status",
        { _id }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const res = await axios.delete(
        "http://localhost:8000/api/v1/delete-message",
        { data: { _id } }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
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
            className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition max-w-[700px] mx-auto w-full"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-3 sm:gap-0">
              <div>
                <p className="text-lg font-semibold text-gray-800">{user.name}</p>

                <div className="flex items-center gap-2 text-gray-600 text-sm mt-1 flex-wrap relative">
                  <span>{user.email}</span>

                  <button
                    onClick={() => copyToClipboard(user.email, user._id)}
                    className="p-1 hover:bg-gray-200 rounded relative"
                  >
                    <IoCopyOutline
                      size={18}
                      className={`transition-transform duration-200 ${
                        copiedId === user._id ? "scale-125 text-green-500" : ""
                      }`}
                    />
                  </button>

                  {copiedId === user._id && (
                    <span className="absolute -top-6 left-20 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-90 animate-bounce">
                      Copied!
                    </span>
                  )}
                </div>
              </div>

              <div
                className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                  user.track
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.track ? "Seen" : "Not Seen"}
                {user.track ? <IoCheckmarkDone size={14} /> : <IoClose size={14} />}
              </div>
            </div>

            <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded-lg border border-gray-200 wrap-break-word">
              {user.message}
            </p>

            <div className="mt-3 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => handleAction(user._id)}
                className="flex-1 bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition text-sm"
              >
                Update Status
              </button>

              <button
                onClick={() => handleDelete(user._id)}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition text-sm flex items-center justify-center gap-2"
              >
                <IoTrashOutline size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
