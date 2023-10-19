import React from "react";
import userPhoto from "../../../assets/user-profile.jpg";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { Avatar } from "@mui/material";

const Header = ({setShowSidebar}) => {

  return (
    <div className="w-full flex justify-center px-5 py-3 ">

      <div className="flex flex-1 items-center">
       
      </div>
      <div className="flex-1 w-full relative" >
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg
            className="w-6 h-6 text-[#1380FF]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          className="bg-[#FFFFFF] w-full h-[4.88494rem] rounded-[3.125rem] block pl-[4rem] text-gray-900 border outline-none border-gray-300"
          placeholder="Search everything..."
        />
      </div>

      <div className="w-full flex flex-1 gap-5 justify-end items-center">
        <Avatar
          sx={{
            width: "4rem",
            height: "4rem",
            bgcolor: "white",
            cursor: "pointer",
          }}
        >
          <TextsmsOutlinedIcon fontSize="large" className="text-gray-700" />
        </Avatar>
        <div
          className="rounded-full cursor-pointer w-[4rem] h-[4rem] bg-cover bg-no-repeat bg-center bg-gradient-to-br from-[lightgray] to-[#B8DFF2]"
          style={{ backgroundImage: `url(${userPhoto})` }}
        />
      </div>
    </div>
  );
};

export default Header;
