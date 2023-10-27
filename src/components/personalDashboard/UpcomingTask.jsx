import * as React from 'react';
import {BiChevronDown} from "react-icons/bi";
import {RiMailUnreadLine} from "react-icons/ri";

export default function UpcomingTask() {
  return (
    <div className='w-full upcoming-task'>
        <div className='w-full flex justify-between mb-2'>
            <h3 className='calendar-heading'> upcoming task </h3>
            <div className='flex gap-1 cursor-pointer'>
                <h4 className='select-time'> Today </h4>
                <BiChevronDown className='text-[#1380FF] text-lg'/>
            </div>
        </div>
        <div className='bg-white rounded-[1.875rem] p-5'>
            <div className='w-full flex flex-col gap-[3rem]'>
              
              <div className='w-full flex items-center gap-4 relative'>
                 <h4 className='time'> 8 : 00 </h4>
                 <div style={{borderTop: "1px solid #A3A3A3"}} className='flex-1 w-full h-0 mb-2'></div>
                 <div style={{borderLeft: "5px solid #38bdf8"}} className='absolute p-2 flex items-center gap-2 primary-event w-[80%] h-[4rem] right-0 top-[50%]'>
                       <div className='aspect-square rounded-full p-2 bg-white flex items-center justify-center'>
                         <RiMailUnreadLine className='text-[#2684FF] text-2xl'/>
                       </div>
                         <div className='flex flex-col'>
                          <h4 className='schedule-meeting'>
                          schedule meeting
                          </h4>
                          <p className='p-0 m-0 schedule-meeting-time'>
                          8:00 Am - 8:30 Am 
                          </p>
                         </div>
                 </div>
              </div>

              <div className='w-full flex items-center gap-4 relative'>
                 <h4 className='time'> 8 : 30 </h4>
                 <div style={{borderTop: "1px solid #A3A3A3"}} className='flex-1 w-full h-0 mb-2'></div>
              </div>

              <div className='w-full flex items-center gap-4 relative'>
                 <h4 className='time'> 9 : 00 </h4>
                 <div style={{borderTop: "1px solid #A3A3A3"}} className='flex-1 w-full h-0 mb-2'></div>
              </div>

              <div className='w-full flex items-center gap-4 relative'>
                 <h4 className='time'> 9 : 30 </h4>
                 <div style={{borderTop: "1px solid #A3A3A3"}} className='flex-1 w-full h-0 mb-2'></div>
              </div>

              <div className='w-full flex items-center gap-4 relative'>
                 <h4 className='time'> 10 : 00 </h4>
                 <div style={{borderTop: "1px solid #A3A3A3"}} className='flex-1 w-full h-0 mb-2'></div>
              </div>

            </div>
        </div>
    </div>
  );
}