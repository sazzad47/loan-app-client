import React from "react";
import "./style.css";
import Svgs from "./Svgs";
import DoneIcon from "@mui/icons-material/Done";

const Home = () => {
  return (
    <div className="min-h-screen w-full p-[2rem] sm:p-[3rem] md:p-[5rem]">
      <div className="p-[1rem] sm:p-[2rem] items-center w-full flex flex-col gap-[5px] sm:gap-[8px] justify-center bg-[#f8f8f8] rounded-[18px]">
        <p className="text-transparent font-[acme] text-[25px] sm:text-[30px] md:text-[55px] font-[400] tracking-normal leading-normal text-center">
          <span className="text-[#333333]">Create your </span>
          <span className="text-[#bf1f2d]">TGIScaleme</span>
          <span className="text-[#333333]"> account now !</span>
        </p>
        <p className="text-transparent font-[roboto] text-[20px] sm:text-[25px] font-[400] tracking-normal leading-normal relative text-center">
          <span className="text-[#686565]">Please Fill out all necessary </span>
          <span className="text-[#137fff] font-[700]">steps</span>
          <span className="text-[#686565]"> to get started</span>
        </p>
      </div>

      <div className="w-full h-[200px] relative mt-3 sm:mt-5">
        <Svgs />
        <div className="w-full min-h-full flex justify-between items-center z-10 px-[4rem]">
          {/* <img className="line" alt="Line" src="https://c.animaapp.com/W3HdjKgK/img/line-1.svg" /> */}

          <div className="h-[55px] w-[55px] rounded-full bg-white flex items-center justify-center">
            <div className="w-[55%] h-[55%] rounded-full bg-[#137fff] flex justify-center items-center">
              <DoneIcon className="text-white" />
            </div>
          </div>
          {/* <div className="text-wrapper">Enter sign up details</div> */}

          <div className="h-[55px] w-[55px] rounded-full bg-white flex items-center justify-center">
            <div className="w-[55%] h-[55%] rounded-full bg-[#F1F1F1] flex justify-center items-center">
              <DoneIcon className="text-[#D9D9D9]" />
            </div>
          </div>
          {/* <div className="text-wrapper-2">Schedule a meeting</div> */}

          <div className="h-[55px] w-[55px] rounded-full bg-white flex items-center justify-center">
            <div className="w-[55%] h-[55%] rounded-full bg-[#F1F1F1] flex justify-center items-center">
              <DoneIcon className="text-[#D9D9D9]" />
            </div>
          </div>
          {/* <div className="text-wrapper-3">Upload verification IDs</div> */}

          <div className="h-[55px] w-[55px] rounded-full bg-white flex items-center justify-center">
            <div className="w-[55%] h-[55%] rounded-full bg-[#F1F1F1] flex justify-center items-center">
              <DoneIcon className="text-[#D9D9D9]" />
            </div>
          </div>
          {/* <div className="text-wrapper-4">Positive account OR Freeze</div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
