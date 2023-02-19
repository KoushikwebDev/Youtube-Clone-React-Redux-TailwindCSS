import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "./utils/chatSlice";
import randomNameGenarator from "./utils/randomName";
function LiveChat() {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({ name: randomNameGenarator(), text: liveMessage + " 🚀 " })
    );
    setLiveMessage("");
  };
  return (
    <div className="w-full">
      <div className="p-2 ml-2 bg-gray-100 border border-black w-full h-[415px] rounded-lg  overflow-y-auto flex flex-col-reverse">
        {chatMessages.map((message, index) => {
          return (
            <ChatMessage key={index} name={message.name} text={message.text} />
          );
        })}
      </div>
      <form className="flex mt-4 gap-4" onSubmit={handleSubmit}>
        <input
          placeholder="Write Here..."
          className="w-full p-2 border border-gray-300"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button type="submit" className="bg-blue-400 px-8  rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
}

export default LiveChat;
