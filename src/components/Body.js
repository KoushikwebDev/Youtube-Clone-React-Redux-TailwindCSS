import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

function Body() {
  const isOpen = useSelector((store) => store.sidebar.isMenuOpen);
  // console.log(isOpen);
  return (
    <div className="flex">
      {isOpen && <Sidebar />}

      <Outlet />
    </div>
  );
}

export default Body;
