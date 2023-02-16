import React from "react";

function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="shadow-lg p-2 w-60">
      <img src={thumbnails.medium.url} className="rounded-lg" alt="thumbnail" />
      <ul className="px-2">
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
}

export default VideoCard;
