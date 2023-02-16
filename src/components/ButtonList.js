import React from "react";
import Button from "./Button";

function ButtonList() {
  const nameList = [
    "All",
    "React Router",
    "Mixes",
    "Popular",
    "Songs",
    "Programming",
    "Dance",

    "PUBG",
    "Minecraft",
    "Hello world",
    "Redux Toolkit",
  ];
  return (
    <div className="flex gap-4 p-5 overflow-hidden">
      {nameList.map((name, index) => {
        return <Button name={name} key={index} />;
      })}
    </div>
  );
}

export default ButtonList;
