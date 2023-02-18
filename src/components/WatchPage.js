import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { closeMenu } from "./utils/slice";

function WatchPage() {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  // console.log(searchParam.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <div className="p-5">
      {console.log("rerender")}
      <iframe
        width="1000"
        height="415"
        src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <CommentContainer />
    </div>
  );
}

export default WatchPage;
