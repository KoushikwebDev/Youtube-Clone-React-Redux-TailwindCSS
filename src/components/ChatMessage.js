import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import randomNameGenarator from "./utils/randomName";

function ChatMessage({ name, text }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const randomName = randomNameGenarator();
      // console.log("Hello Live Chat");
      dispatch(addMessage({ name: randomName, text: "Hello Brother 🚀 " }));
    }, 1000);

    return () => {
      // console.log("clearing... interval");
      clearInterval(interval);
    };
  });

  return (
    <div className="flex gap-5 shadow-lg p-1 my-1">
      <div>
        <img
          className="h-10"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
      <div>
        <h3 className="font-semibold text-sm">{name}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
