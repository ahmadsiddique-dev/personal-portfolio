import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import axios from "axios";
import { useEffect, useState } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [ahmad, setAmad] = useState({
    msg : "are you ok sir."
  })

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/v1/dashboard")
      .then((response) => {
        setMessages(response.data.data || []);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      <button
        onClick={() => window.history.back()}
        className="bg-amber-500 text-white p-3 rounded-full shadow-md hover:bg-amber-600 transition absolute top-4 left-4"
      >
        <IoMdArrowRoundBack size={22} />
      </button>

      <h1 className="text-xl font-semibold text-center text-gray-800 mb-6 mt-3">
        Message Status
      </h1>

      <div className="flex flex-col gap-4 mt-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between">
              <p className="font-semibold text-gray-800 text-sm">{msg.name}</p>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                status
              <IoCheckmarkDone className={msg.track && "text-blue-500" } size={15} />
              </div>
            </div>

            <p className="text-gray-700 text-sm mt-2">{"*".repeat(msg.message.length)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
