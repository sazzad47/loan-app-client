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

      <div className="w-full h-[100px] sm:h-[140px] md:h-[200px] relative mt-3 sm:mt-5">
        <Svgs />
        <div className="w-full h-full z-10 pl-[2rem] pr-[7rem]">
          <div className="w-full h-full relative flex justify-between items-center">

            <div className="absolute w-full h-auto grid grid-cols-6">

              <div className="stepper-item flex flex-col gap-4 items-center">
                <div className="z-[5] h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
                  <div className="w-[50%] h-[50%] rounded-full bg-[#137fff] flex justify-center items-center">
                    <DoneIcon fontSize="10em" className="text-white" />
                  </div>
                </div>
                <div className="text-white font-[roboto] text-[0.8em] font-semibold tracking-normal leading-normal text-center">
                  Enter sign up details
                </div>
              </div>

              <div className="stepper-item flex flex-col gap-4 items-center">
                <div className="z-[5] h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
                  <div className="w-[50%] h-[50%] rounded-full bg-[#137fff] flex justify-center items-center">
                    <DoneIcon fontSize="10em" className="text-white" />
                  </div>
                </div>
                <div className="text-white font-[roboto] text-[0.8em] font-semibold tracking-normal leading-normal text-center">
                  Pull report
                </div>
              </div>

              <div className="stepper-item flex flex-col gap-4 items-center">
                <div className="z-[5] h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
                  <div className="w-[50%] h-[50%] rounded-full bg-[#137fff] flex justify-center items-center">
                    <DoneIcon fontSize="10em" className="text-white" />
                  </div>
                </div>
                <div className="text-white font-[roboto] text-[0.8em] font-semibold tracking-normal leading-normal text-center">
                  Schedule a meeting
                </div>
              </div>

              <div className="stepper-item flex flex-col gap-4 items-center">
                <div className="z-[5] h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
                  <div className="w-[50%] h-[50%] rounded-full bg-[#137fff] flex justify-center items-center">
                    <DoneIcon fontSize="10em" className="text-white" />
                  </div>
                </div>
                <div className="text-white font-[roboto] text-[0.8em] font-semibold tracking-normal leading-normal text-center">
                  Upload verification IDs
                </div>
              </div>

              <div className="stepper-item flex flex-col gap-4 items-center">
                <div className="z-[5] h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
                  <div className="w-[50%] h-[50%] rounded-full bg-[#137fff] flex justify-center items-center">
                    <DoneIcon fontSize="10em" className="text-white" />
                  </div>
                </div>
                <div className="text-white font-[roboto] text-[0.8em] font-semibold tracking-normal leading-normal text-center">
                  Select Packages
                </div>
              </div>

              <div className="stepper-item flex flex-col gap-4 items-center">
                <div className="z-[5] h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
                  <div className="w-[50%] h-[50%] rounded-full bg-[#F1F1F1] flex justify-center items-center">
                    <DoneIcon fontSize="10em" className="text-[#D9D9D9]" />
                  </div>
                </div>
                <div className="text-white font-[roboto] text-[0.8em] font-[600] tracking-normal leading-normal text-center">
                  Positive account & Freeze account
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
