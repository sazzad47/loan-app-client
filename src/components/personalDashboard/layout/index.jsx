import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <div className="bg-[#F8F8F8]">
      <Header setShowSidebar={setShowSidebar} />
      <div className="flex">
        <Sidebar show={showSidebar} setter={setShowSidebar} />
        <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
