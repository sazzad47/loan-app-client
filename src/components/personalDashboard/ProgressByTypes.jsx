import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import {AiOutlineRise, AiOutlineFall} from "react-icons/ai";


const ProgressByTypes = () => {
  return (
    <div className='w-[70%] bg-white p-3'>
        <div className='w-full grid grid-cols-3 gap-3'>
            <div className='flex flex-col gap-3 items-center'>
                <h3 className='progress-transunion'> transUnion </h3>
                <div className='w-full flex justify-center items-center gap-2'>
                  <AiOutlineRise className='text-[#50D910] text-[2rem] leading-5'/>
                  <p className='text-[#50D910] text-center leading-5 font-[Spartan] py-0 my-0'> 13 </p>
                </div>
                
                <ReactSpeedometer
                    value={333}
                    needleHeightRatio={0.5}
                    labelFontSize={'15px'}
                    valueTextFontSize={'23px'}
                    textColor={"#1B1919"}
                    ringWidth={10}
                    needleColor='#333'
                    segmentColors={["#2684FF", "#e5e7eb"]}
                    height={150}
                    width={220}
                />
        
                <div className='w-full flex justify-center gap-2'>
                    <span className='report-updated'> Report updated on </span>
                    <span className='report-updated-date'> 10/02/2023 </span>
                </div>
            </div>

            <div className='flex flex-col gap-3 items-center'>
                <h3 className='progress-transunion'> experian </h3>
                <div className='w-full flex justify-center items-center gap-2'>
                  <AiOutlineRise className='text-[#50D910] text-[2rem] leading-5'/>
                  <p className='text-[#50D910] text-center leading-5 font-[Spartan] py-0 my-0'> 13 </p>
                </div>
                <ReactSpeedometer
                    value={333}
                    needleHeightRatio={0.5}
                    labelFontSize={'15px'}
                    valueTextFontSize={'23px'}
                    textColor={"#1B1919"}
                    ringWidth={10}
                    needleColor='#333'
                    segmentColors={["#2684FF", "#e5e7eb"]}
                    height={150}
                    width={220}
                />
        
                <div className='w-full flex justify-center gap-2'>
                    <span className='report-updated'> Report updated on </span>
                    <span className='report-updated-date'> 10/02/2023 </span>
                </div>
            </div>

            <div className='flex flex-col gap-3 items-center'>
                <h3 className='progress-transunion'> equifax </h3>
                <div className='w-full flex justify-center items-center gap-2'>
                  <AiOutlineFall className='text-[#EB6B7A] text-[2rem] leading-5'/>
                  <p className='text-[#EB6B7A] text-center leading-5 font-[Spartan] py-0 my-0'> 13 </p>
                </div>
                <ReactSpeedometer
                    value={333}
                    needleHeightRatio={0.5}
                    labelFontSize={'15px'}
                    valueTextFontSize={'23px'}
                    textColor={"#1B1919"}
                    ringWidth={10}
                    needleColor='#333'
                    segmentColors={["#2684FF", "#e5e7eb"]}
                    height={150}
                    width={220}
                />
        
                <div className='w-full flex justify-center gap-2'>
                    <span className='report-updated'> Report updated on </span>
                    <span className='report-updated-date'> 10/02/2023 </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgressByTypes