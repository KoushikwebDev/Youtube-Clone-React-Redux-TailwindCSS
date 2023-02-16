import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="p-5 shadow-lg text-justify h-[87vh] w-fit ">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>Shorts</li>
          <li>Live</li>
          <li>Originals</li>
        </ul>
        <h1 className="text-lg font-bold">Subscription</h1>
        <ul>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Movies</li>
          <li>Music</li>
        </ul>

        <h1 className="text-lg font-bold">Explore</h1>
        <ul>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Movies</li>
          <li>Music</li>
        </ul>
        <h1 className="text-lg font-bold">More</h1>
        <ul>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Movies</li>
          <li>Music</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
