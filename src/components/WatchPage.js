import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { closeMenu } from "./utils/slice";

function WatchPage() {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  const title = searchParam.get("title");
  // console.log(searchParam.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());

    return () => {
      // console.log("unmounting");
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-5 w-full flex ">
      <div>
        {/* {console.log("rerender")} */}
        <iframe
          width="900"
          height="415"
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="text-xl font-bold py-3">{title}</h1>
        <CommentContainer />
      </div>

      <LiveChat />
    </div>
  );
}

export default WatchPage;
