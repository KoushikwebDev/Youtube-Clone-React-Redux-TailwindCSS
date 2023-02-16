import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

function MainContainer() {
  return (
    <div className="h-[87vh]">
      <ButtonList />
      <VideoContainer />
    </div>
  );
}

export default MainContainer;
