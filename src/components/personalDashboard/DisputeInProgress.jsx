import React from "react";
import {
  BiMailSend,
  BiMessageSquareDetail,
  BiMessageRoundedCheck,
} from "react-icons/bi";
import { PiDotsThreeVerticalLight } from "react-icons/pi";

const DisputeInProgress = () => {
  return (

    <div className="w-[70%]"> 
     <h3 className="dispute-in-progress">Dispute in progress</h3>  
      <div className="w-full grid grid-cols-3 gap-5 bg-white p-3 mt-[1rem]">
        <div className="w-full flex flex-col gap-5">
          <div className="px-4">
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <BiMailSend className="text-[#2684FF]" />
                <p className="p-0 m-0 letter-sent">letter sent</p>
              </div>
              <p className="p-0 m-0 letter-sent-date">10/02/2023</p>
            </div>
            <PiDotsThreeVerticalLight />

            <div className="w-full flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <BiMessageSquareDetail className="text-green-400" />
                <p className="p-0 m-0 letter-sent">letter created</p>
              </div>
              <p className="p-0 m-0 letter-sent-date">10/02/2023</p>
            </div>
            <PiDotsThreeVerticalLight />

            <div className="w-full flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <BiMessageRoundedCheck className="text-[#2684FF]" />
                <p className="p-0 m-0 letter-sent">Responded</p>
              </div>
              <p className="p-0 m-0 letter-sent-date">10/02/2023</p>
            </div>
          </div>

          <button className="w-full bg-[#0063D7] rounded-[0.625rem] uppercase font-[600] font-[Poppins] text-white px-3 py-3 text-center">
            mark letter as sent
          </button>
        </div>

        <div className="w-full flex flex-col gap-5">
          <div className="px-4">
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <BiMailSend className="text-[#2684FF]" />
                <p className="p-0 m-0 letter-sent">letter sent</p>
              </div>
              <p className="p-0 m-0 letter-sent-date">10/02/2023</p>
            </div>
            <PiDotsThreeVerticalLight />

            <div className="w-full flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <BiMessageSquareDetail className="text-green-400" />
                <p className="p-0 m-0 letter-sent">letter created</p>
              </div>
              <p className="p-0 m-0 letter-sent-date">10/02/2023</p>
            </div>
            <PiDotsThreeVerticalLight />

            <div className="w-full flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <BiMessageRoundedCheck className="text-[#2684FF]" />
                <p className="p-0 m-0 letter-sent">Responded</p>
              </div>
              <p className="p-0 m-0 letter-sent-date">10/02/2023</p>
            </div>
          </div>

          <button className="w-full bg-[#0063D7] rounded-[0.625rem] uppercase font-[600] font-[Poppins] text-white px-3 py-3 text-center">
            mark letter as sent
          </button>
        </div>

        <div className="w-full flex flex-col gap-5">
          <div className="px-4">
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <BiMailSend className="text-[#2684FF]" />
                <p className="p-0 m-0 letter-sent">letter sent</p>
              </div>
              <p className="p-0 m-0 letter-sent-date">10/02/2023</p>
            </div>
            <PiDotsThreeVerticalLight />

            <div className="w-full flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <BiMessageSquareDetail className="text-green-400" />
                <p className="p-0 m-0 letter-sent">letter created</p>
              </div>
              <p className="p-0 m-0 letter-sent-date">10/02/2023</p>
            </div>
            <PiDotsThreeVerticalLight />

            <div className="w-full flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <BiMessageRoundedCheck className="text-[#2684FF]" />
                <p className="p-0 m-0 letter-sent">Responded</p>
              </div>
              <p className="p-0 m-0 letter-sent-date">10/02/2023</p>
            </div>
          </div>

          <button className="w-full bg-[#0063D7] rounded-[0.625rem] uppercase font-[600] font-[Poppins] text-white px-3 py-3 text-center">
            mark letter as sent
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisputeInProgress;
