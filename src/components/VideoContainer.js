import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "./utils/constant";
import VideoCard, { RedBorderVideoCard } from "./VideoCard";

function VideoContainer() {
  const [videos, setVideos] = useState(null);
  const getVideos = async () => {
    let data = await fetch(YOUTUBE_VIDEOS_API);
    let json = await data.json();
    setVideos(json.items);
    console.log(json);
  };
  useEffect(() => {
    getVideos();
  }, []);
  if (!videos) return;
  return (
    <div className="px-5 h-[75vh] flex flex-wrap gap-5 justify-between overflow-y-scroll">
      <RedBorderVideoCard info={videos[0]} />
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
