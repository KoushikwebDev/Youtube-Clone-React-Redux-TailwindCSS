import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "./utils/slice";

function WatchPage() {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  console.log(searchParam.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="p-5">
      <iframe
        width="1000"
        height="415"
        src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage;
