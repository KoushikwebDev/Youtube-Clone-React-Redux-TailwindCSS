import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "./utils/constant";
import { cacheResults } from "./utils/searchSlice";
import { toogleSlidebar } from "./utils/slice";
import { addVideo } from "./utils/setVideoSlice";
import { setSearchValue } from "./utils/searchValueSlice";

function Head() {
  const dispatch = useDispatch();
  // const [searchQuery, setSearchQuery] = useState("");
  const [suggetions, setSuggetions] = useState(null);
  const [showSuggetions, setShowSuggetions] = useState(false);
  const [value, setValue] = useState(null);

  const searchCache = useSelector((store) => store.search);
  const allVideosCopy = useSelector((store) => store.searchVideoCopy);
  const searchValue = useSelector((store) => store.searchValue);

  // console.log(searchCache);
  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchCache[searchValue]) {
        // console.log(searchCache);
        setSuggetions(searchCache[searchValue]);
      } else {
        getSearchSuggetions();
      }
    }, 200);
    searchVideo();
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, [searchValue]);

  const getSearchSuggetions = async () => {
    if (searchValue === value) return;
    let res = await fetch(YOUTUBE_SEARCH_API + searchValue);
    let json = await res.json();
    setSuggetions(json[1]);
    setShowSuggetions(true);

    dispatch(cacheResults({ [searchValue]: json[1] }));

    // console.log(json[1]);
  };

  const handleClick = async (suggetion) => {
    // console.log(suggetion);
    dispatch(setSearchValue(suggetion));
    setShowSuggetions(false);
    setValue(suggetion);
    // searchVideo();
  };

  const toogleSlide = () => {
    // console.log("clicked");
    dispatch(toogleSlidebar());
  };

  // searchVideo

  const searchVideo = () => {
    // console.log("running " + searchValue);
    if (searchValue === "") {
      dispatch(addVideo(allVideosCopy));
    }
    let filteredVideos = allVideosCopy.filter((video) => {
      return video.snippet.title
        .toLowerCase()
        .trim()
        .includes(searchValue.toLowerCase());
    });

    dispatch(addVideo(filteredVideos));
  };
  // console.log(searchValue);
  return (
    <div className="grid grid-flow-col p-5 shadow-lg ">
      <div className="flex col-span-1 gap-5">
        <img
          className="h-10 cursor-pointer"
          alt="menu-logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          onClick={(e) => toogleSlide()}
        />

        <img
          className="w-32 h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="yotube-logo"
        />
      </div>

      <div className="flex col-span-10 justify-center items-center relative  ">
        <input
          className="w-1/2 border border-gray-500 p-2 rounded-l-full"
          type="text"
          value={searchValue}
          onChange={(e) => {
            dispatch(setSearchValue(e.target.value));
            // searchVideo();
          }}
          // ref={inputRef}
          onBlur={() =>
            setTimeout(() => {
              setShowSuggetions(false);
            }, 200)
          }
          onFocus={() => setShowSuggetions(true)}
        />
        <button
          onClick={searchVideo}
          className="px-4 py-2  border border-gray-500  bg-gray-200 rounded-r-full "
        >
          🔍
        </button>

        {showSuggetions && (
          <div
            // ref={divRef}
            className="absolute w-96 rounded-lg   bg-white shadow-lg top-12"
          >
            <ul>
              {suggetions &&
                suggetions.map((suggetion, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-300 cursor-pointer shadow-lg"
                    onClick={() => handleClick(suggetion)}
                  >
                    🔍 {suggetion}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-10"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
}

export default Head;
