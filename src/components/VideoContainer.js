import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "./utils/constant";
import { addVideosCopy } from "./utils/searchVideo";
import { addVideo } from "./utils/setVideoSlice";
import VideoCard, { RedBorderVideoCard } from "./VideoCard";

function VideoContainer() {
  const dispatch = useDispatch();

  // const [videos, setVideos] = useState(null);

  const videos = useSelector((store) => store.videos);

  const getVideos = async () => {
    let data = await fetch(YOUTUBE_VIDEOS_API);
    let json = await data.json();
    // setVideos(json.items);
    dispatch(addVideo(json.items));
    dispatch(addVideosCopy(json.items));
    console.log(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (!videos.length)
    return <h1 className="text-2xl font-bold text-center p-4">Loading...</h1>;
  return (
    <div className="px-5 h-[75vh] flex flex-wrap gap-5 justify-between overflow-y-scroll">
      {/* <RedBorderVideoCard info={videos[0]} /> */}
      {videos.map((video) => (
        <Link
          to={"/watch?v=" + video.id + "&title=" + video?.snippet?.title}
          key={video.id}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
