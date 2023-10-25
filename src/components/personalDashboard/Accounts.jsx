import React from "react";
import avatar from "../../assets/account-avatar.svg"

const Accounts = () => {
  return (
    <div className="w-full accounts flex flex-col gap-2">
      <div className="w-full flex gap-3 items-center p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="65"
          viewBox="0 0 68 65"
          fill="none"
        >
          <ellipse
            cx="33.5033"
            cy="32.3752"
            rx="33.5101"
            ry="31.8025"
            fill="#88BFFF"
            fill-opacity="0.15"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.5015 20.915C30.5686 20.915 28.191 23.2927 28.191 26.2256C28.191 29.1586 30.5686 31.5362 33.5015 31.5362C36.4345 31.5362 38.8121 29.1586 38.8121 26.2256C38.8121 23.2927 36.4345 20.915 33.5015 20.915ZM29.868 26.2256C29.868 24.2189 31.4948 22.5921 33.5015 22.5921C35.5083 22.5921 37.1351 24.2189 37.1351 26.2256C37.1351 28.2324 35.5083 29.8592 33.5015 29.8592C31.4948 29.8592 29.868 28.2324 29.868 26.2256Z"
            fill="#2684FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.1475 33.2132C27.2145 33.2132 24.8369 35.5909 24.8369 38.5238C24.8369 41.4568 27.2145 43.8344 30.1475 43.8344H36.8556C39.7886 43.8344 42.1662 41.4568 42.1662 38.5238C42.1662 35.5909 39.7886 33.2132 36.8556 33.2132H30.1475ZM26.5139 38.5238C26.5139 36.5171 28.1407 34.8903 30.1475 34.8903H36.8556C38.8624 34.8903 40.4892 36.5171 40.4892 38.5238C40.4892 40.5306 38.8624 42.1574 36.8556 42.1574H30.1475C28.1407 42.1574 26.5139 40.5306 26.5139 38.5238Z"
            fill="#2684FF"
          />
        </svg>
        <div className="flex flex-col">
            <h2 className="accounts-title">
            Accounts
            </h2>
            <p className="m-0 p-0 accounts-text">
            Complete Your Positive Accounts Information
            </p>
            <p className="m-0 p-0 accounts-text">
            Manage Them All
            </p>
        </div>
      </div>

      <div className="bg-[#FBFBFB] py-2 flex justify-center">
        <div className="w-[70%] flex flex-col max-auto">
            <h3 className="profile-completeness">
            Profile completeness :
            </h3>
            <div className="w-full bg-[#EDEDED] rounded-full h-[1.4rem]">
                <div className="bg-[#38B000] h-[1.4rem] rounded-full text-white text-[0.6rem] font-[Spartan] flex items-center justify-center px-3" style={{width: "45%"}} > 45% </div>
            </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5 p-3">
         <div className="w-full flex items-center justify-between">
            <p className="p-0 m-0 existing-account">
              your existing account
            </p>
            <p className="p-0 m-0 complete-account">
              complete your account
            </p>
         </div>
         <div className="border border-[#BDBFC0] rounded-[0.625rem] flex items-center gap-2 p-2">
             <img src={avatar} alt="" className="w-[45px] h-[45px]" />
             <div className="flex flex-col items-start">
                <p className="p-0 m-0 account-name">
                John blake
                </p>
                <p className="p-0 m-0 account-email">
                missvannie1@gmail.com
                </p>
             </div>
             <button className="manage-account ml-auto px-3 py-2 w-[170px]">
                Manage Account
             </button>
         </div>

         <div className="border border-[#BDBFC0] rounded-[0.625rem] flex items-center gap-2 p-2">
             <img src={avatar} alt="" className="w-[45px] h-[45px]" />
             <div className="flex flex-col items-start">
                <p className="p-0 m-0 account-name">
                John blake
                </p>
                <p className="p-0 m-0 account-email">
                missvannie1@gmail.com
                </p>
             </div>
             <button className="manage-account ml-auto px-3 py-2 w-[170px]">
                Manage Account
             </button>
         </div>

         <div className="w-full flex justify-end">
            <div className="view-all cursor-pointer">
                View all
            </div>
         </div>
      </div>
    </div>
  );
};

export default Accounts;
