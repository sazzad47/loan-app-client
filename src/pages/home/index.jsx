import React from "react";
import person from "../../assets/personal-account.png"
import { Bag, BagHandle } from "./Svgs";
import businessFunding from "../../assets/business-funding.png";
import digitalMarketing from "../../assets/digital-marketing.png";
import { Link } from "react-router-dom";

const PersonalAccount = () => {

  return (
    <div className="min-h-screen w-full p-[2rem] sm:p-[3rem] md:p-[5rem]">
      <div style={{border: "3px solid #2684FF"}} className="bg-[#F7F9F8] w-full h-full rounded-[1.9375rem] py-5">
        <div className="flex flex-col">
          <p className="font-[Spartan] text-center text-[2em] font-[700]"> Welcome TGIscalme Credit Business Services </p>
          <p className="text-center font-[Spartan] text-[#A3A3A3] font-[500] text-[0.9em]"> Choose Account Type </p>
         
          <div className="grid grid-cols-2 gap-[5rem] mt-5 px-[10rem]">
            <div className="w-full flex justify-center items-center">

            <Link style={{textDecoration: "none"}} to="/personal-account" className="w-full">
            
            <div style={{background: "linear-gradient(126deg, #1380FF 9.34%, rgba(142, 202, 230, 0.90) 89.76%)"}} className="w-full py-5 rounded-[4rem] flex justify-center items-center">
              <div className="flex flex-col gap-2 items-center">

              <img src={person} alt="personal account" className="w-[100px] h-[130px]" />
              <p className="text-[#FDFDFD] font-[Spartan] font-[600] text-[0.8em]"> Personal Credit Repair </p>
              </div>
            </div>
            </Link>
            </div>


            <div style={{background: ""}} className="w-full py-3 rounded-[4rem] flex justify-center items-center">
              <div className="flex flex-col gap-2 items-center">
             <div className="relative">
             <Bag/>
             <div className="absolute top-[5rem] right-1">

              <BagHandle/>
             </div>
             </div>

              <p className="text-[#3E3D3D] font-[Spartan] font-[600] text-[0.8em]"> Business Credit </p>
              <p className="m-0 bg-green-700 px-3 py-2 text-sm rounded-full text-white"> Modules are currently being updated </p>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-4">

            <div className="bg-[#1380FF] py-3 rounded-full flex justify-center items-center w-[160px] h-[160px]">
              <img src={businessFunding} alt="business funding" />
            </div>
            <p className="text-[#333] font-[Spartan] font-[600] text-[0.8em]">  Business Funding </p>
            <p className="m-0 bg-green-700 px-3 py-2 text-sm rounded-full text-white"> Modules are currently being updated </p>

            </div>
            <div className="w-full flex flex-col justify-center items-center gap-4">

            <div className="bg-[#1380FF] py-3 rounded-full flex justify-center items-center w-[160px] h-[160px]">
              <div className="flex flex-col gap-2 items-center">
           
              <img src={digitalMarketing} alt="digital marketing" />
              </div>
            </div>

            <p className="text-[#333] font-[Spartan] font-[600] text-[0.8em]">  Digital Marketing </p>
            <p className="m-0 bg-green-700 px-3 py-2 text-sm rounded-full text-white"> Modules are currently being updated </p>

            </div>

           

          </div>

          <p className="capitalize text-[#88A8D3] font-[600] text-[1.3em] text-center mt-[3rem]"> personal accounts cannot be used for business purposes </p>
          <div className="w-full flex gap-[3rem] justify-center">
            <Link to="/" className="text-[#737373] underline font-[600]" > Terms & conditions </Link>
            <Link to="/" className="text-[#737373] underline font-[600]"> Privacy policy </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PersonalAccount;
