import React, { useState } from 'react';
import {BsThreeDots} from "react-icons/bs";
import ReactApexChart from 'react-apexcharts';
import {FaRegUserCircle} from "react-icons/fa";
import {RiDeleteBin6Line} from "react-icons/ri";

const ApexChart = (props) => {
  const [series] = useState([
    {
      name: "Dispute",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ]);

  const [options] = useState({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: false
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
   
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};


const DisputeProgress = () => {
  return (
    <div className="dispute-progress flex-1">
        <div className="w-full flex justify-between items-start">
          <div className='flex flex-col'>
                <div className="dispute-progress-heading">Dispute Progress</div>
                <p className="element-dispute-in-this">
                    <span className="span">30 dispute </span>
                    <span className="month">in this month </span>
                </p>
          </div>
          <BsThreeDots className='text-[#4f4242] text-3xl cursor-pointer'/>
        </div>
        <div className='relative'>
           <ApexChart/>
        </div>
         <div className='w-full flex justify-between'>
            <div className='flex flex-col items-center gap-3'>
                <div className='bg-gray-200 w-[50px] h-[50px] rounded-full flex justify-center items-center'>
                <FaRegUserCircle className='w-[60%] h-[60%] text-[#2684FF]'/>
                </div>
                <div className='generated'>
                    Generated
                </div>
                <div className='generated-accounts'>
                    <span> 200 </span> accounts
                </div>
            </div>

            <div className='flex flex-col items-center gap-3'>
                <div className='bg-gray-200 w-[50px] h-[50px] rounded-full flex justify-center items-center'>
                <RiDeleteBin6Line className='w-[60%] h-[60%] text-[#CF202E]'/>
                </div>
                <div className='generated'>
                    Removed
                </div>
                <div className='generated-accounts'>
                    <span> 200 </span> accounts
                </div>
            </div>
         </div>
  </div>
  )
}

export default DisputeProgress