import React from "react";
import { Link, useLocation } from "react-router-dom";
import {RiHome5Line} from "react-icons/ri";
import {BiWalletAlt} from "react-icons/bi";
import {BiMessageRoundedCheck} from "react-icons/bi";
import {TbReportAnalytics} from "react-icons/tb";
import {HiOutlineUserCircle} from "react-icons/hi";
import {CiSettings} from "react-icons/ci";
import {PiLightbulb} from "react-icons/pi";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {TbLayoutSidebarRightCollapse} from "react-icons/tb";


export default function Sidebar({ show, setter }) {

    const sidebarLinks = [
      { id: 1, link: "/personal-dashboard", icon: RiHome5Line },
      { id: 2, link: "/personal-dashboard/page-2", icon: BiWalletAlt },
      { id: 3, link: "/personal-dashboard/page-3", icon: BiMessageRoundedCheck },
      { id: 4, link: "/personal-dashboard/page-4", icon: TbReportAnalytics },
      { id: 5, link: "/personal-dashboard/page-5", icon: HiOutlineUserCircle },
      { id: 6, link: "/personal-dashboard/page-6", icon: CiSettings },
      { id: 6, link: "/personal-dashboard/page-7", icon: PiLightbulb },
      { id: 6, link: "/personal-dashboard/page-8", icon: AiOutlineQuestionCircle },
    
    ];

    // Define our base class
    const className = "w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-[-250px]" : " ml-0";

    // Clickable menu items
    const MenuItem = ({ item }) => {
        // Highlight menu item based on currently displayed route
      
        const location = useLocation();
        return (
          <Link
            to={item.link}
            className={`flex items-center p-4 rounded-full hover:bg-gray-200 ${
              location.pathname === item.link ? "bg-gradient-to-r from-[#1380FF] to-[#1C77EED4]" : "" 
            }`}
          >
            <item.icon className={`w-[30px] h-[30px] ${location.pathname === item.link? "text-white" : "text-gray-500"}`} />
          </Link>
        )
    }

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
            onClick={() => {
                setter(oldVal => !oldVal);
            }}
        />
    )

    return (
        <>
            <div className={`${className}${appendClass}`}>
               
            <div className="w-full flex flex-col justify-center items-center gap-4">
            {/* <TbLayoutSidebarRightCollapse onClick={()=> {setter(oldVal => !oldVal)}} className="w-[30px] h-[30px] cursor-pointer text-gray-500"/> */}
              {sidebarLinks.map((item) => (
                 <MenuItem key={item.id} item={item}  />
                ))}
              </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}
