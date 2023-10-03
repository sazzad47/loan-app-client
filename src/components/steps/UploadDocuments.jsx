import * as React from "react";
import Grid from "@mui/material/Grid";
import documentImg from "../../assets/upload-doc.jpg";
import { UploadIcon } from "../svgs";

export default function UploadDocuments() {
  return (
    <Grid className="">
      <div className="px-[5rem]">
        <p className="p-0 m-0 text-[#1E1E1E] text-center font-[Spartan] font-[700] text-[2.25rem]">
          We need Proof of Address
        </p>
        <p className="p-0 m-0 text-[#686666] text-center font-[Spartan] font-[400] text-[1rem]">
          It should be consistent with the address on your ID
        </p>
      </div>

      <div className="flex gap-3 mt-[3rem]">

        <div style={{borderRight: "1px solid #A3A3A3"}} className="bg-[#FDFDFD] w-1/3 flex flex-col gap-3">
          <img src={documentImg} alt="document" className="w-full h-full" />
          <p className="p-0 m-0 text-center text-[#333] font-[Spartan] font-[600] uppercase text-[1em]"> Must add these </p>

          <div className="w-full flex pl-2">
            <div style={{borderLeft: "3px dashed #D9D9D9"}} className="h-full w-0 mt-3"/>
            <div className="relative w-full pl-3">
                <div className="absolute w-[12px] h-[12px] bg-[#38B000] rounded-full left-[-0.5rem] z-10 top-2"/>
                <p className="p-0 m-0 text-[#333333] font-[600] text-[Spartan] text-[0.9em]"> 1st Item ( Photo ID)  </p>
                <div style={{borderBottom: "1px solid #00B4D8"}} className="h-0 w-1/2"/>
                <p className="p-0 m-0 text-[#333333] font-[400] text-[Roboto] text-[0.8em]"> This could be : </p>
                <ul className="pl-4">
                    <li className="list-disc p-0 m-0 text-[#333333] font-[400] text-[Roboto] text-[0.7em]"> Driving license </li>
                    <li className="list-disc p-0 m-0 text-[#333333] font-[400] text-[Roboto] text-[0.7em]"> State ID card </li>
                    <li className="list-disc p-0 m-0 text-[#333333] font-[400] text-[Roboto] text-[0.7em]"> Other government issued photo ID card </li>
                </ul>
            </div>
         </div>

          <div className="w-full flex pl-2">
            <div style={{borderLeft: "3px dashed #D9D9D9"}} className="h-full w-0 mt-3"/>
            <div className="relative w-full pl-3">
                <div className="absolute w-[12px] h-[12px] bg-[#38B000] rounded-full left-[-0.5rem] z-10 top-2"/>
                <p className="p-0 m-0 text-[#333333] font-[600] text-[Spartan] text-[0.9em]"> 2nd Item (Proof of address)  </p>
                <div style={{borderBottom: "1px solid #00B4D8"}} className="h-0 w-1/2"/>
                <p className="p-0 m-0 text-[#333333] font-[400] text-[Roboto] text-[0.8em]"> This could be : </p>
                <ul className="pl-4">
                    <li className="list-disc p-0 m-0 text-[#333333] font-[400] text-[Roboto] text-[0.7em]"> Bank statement </li>
                </ul>
            </div>
         </div>

          <div className="w-full flex pl-2">
            <div style={{borderLeft: "3px dashed #D9D9D9"}} className="h-full w-0 mt-3"/>
            <div className="relative w-full pl-3">
                <div className="absolute w-[12px] h-[12px] bg-[#38B000] rounded-full left-[-0.5rem] z-10 top-2"/>
                <p className="p-0 m-0 text-[#333333] font-[600] text-[Spartan] text-[0.9em]"> 3rd Item (Social security Card)  </p>
                <div style={{borderBottom: "1px solid #00B4D8"}} className="h-0 w-1/2"/>
                <p className="p-0 m-0 text-[#333333] font-[400] text-[Roboto] text-[0.8em]"> This could be : </p>
                <ul className="pl-4">
                    <li className="list-disc p-0 m-0 text-[#333333] font-[400] text-[Roboto] text-[0.7em]"> Social security card </li>
                </ul>
            </div>
         </div>

        </div>

        <div className="flex-1">
            <p className="text-start m-0 p-0 text-[#1F1D1D] font-[Spartan] text-[0.7] font-[400]"> Add your documents here </p>
            <div style={{border: "3px dashed #1380FF"}} className="w-full bg-[#F8FAFD] rounded-[0.75rem] p-[3rem] mt-2">
                <div className="flex flex-col items-center gap-2">
                     <UploadIcon/>
                     <p className="p-0 m-0 text-[#434343] font-[Spartan] text-[1.5em]"> Drop file to upload or <span className="text-[#1380FF] underline cursor-pointer"> browse </span>  </p>
                     <p className="p-0 m-0 text-[#686666] font-[400] font-[Spartan] text-[0.8em]"> Maximum file size <span className="font-[600]"> 5000 pixel </span> </p>
                </div>
            </div>
            <div className="w-full flex justify-center mt-3">
                <div className="flex gap-3">
                    <button className="rounded-[0.3125rem] bg-[#1380FF] px-3 py-2 cursor-pointer text-[#fff] font-[Spartan]"> Upload files </button>
                    <button style={{border: "1px solid #D3D3D3"}} className="px-3 py-2 rounded-[0.3125rem] font-[Spartan] text-[#686666]"> Cancel </button>
                </div>
            </div>
        </div>

      </div>
    </Grid>
  );
}
