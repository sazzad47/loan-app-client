import React from "react";
import { Link } from "react-router-dom";

const CreditTable = () => {
    return (
      <div className="">
        <table className="credit-table">
          <thead>
            <tr>
              <th className="item-table-heading">Status</th>
              <th className="item-table-heading">Experian</th>
              <th className="item-table-heading">Equifax</th>
              <th className="item-table-heading">Transunion</th>
              <th className="item-table-heading"></th>
            </tr>
          </thead>
          <tbody>
             <tr>
                <td className="status-positive"> Positive </td>
                <td className="item-value"> 12 </td>
                <td className="item-value"> 4 </td>
                <td className="item-value"> 8 </td>
                <td className="text-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <circle cx="12.5098" cy="12.5728" r="9" stroke="#33363F"/>
                        <circle cx="12.5098" cy="18.5728" r="0.5" fill="#33363F" stroke="#33363F"/>
                        <path d="M12.5098 16.5728V15.1539C12.5098 14.2097 13.114 13.3713 14.0098 13.0728V13.0728C14.9056 12.7742 15.5098 11.9359 15.5098 10.9916V10.4784C15.5098 8.87368 14.2088 7.57275 12.6041 7.57275H12.5098C10.8529 7.57275 9.50977 8.9159 9.50977 10.5728V10.5728" stroke="#33363F"/>
                    </svg>
                </td>
             </tr>
             <tr>
                <td className="status-required"> repaired </td>
                <td className="item-value"> 12 </td>
                <td className="item-value"> 4 </td>
                <td className="item-value"> 8 </td>
                <td className="text-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <circle cx="12.5098" cy="12.5728" r="9" stroke="#33363F"/>
                        <circle cx="12.5098" cy="18.5728" r="0.5" fill="#33363F" stroke="#33363F"/>
                        <path d="M12.5098 16.5728V15.1539C12.5098 14.2097 13.114 13.3713 14.0098 13.0728V13.0728C14.9056 12.7742 15.5098 11.9359 15.5098 10.9916V10.4784C15.5098 8.87368 14.2088 7.57275 12.6041 7.57275H12.5098C10.8529 7.57275 9.50977 8.9159 9.50977 10.5728V10.5728" stroke="#33363F"/>
                    </svg>
                </td>
             </tr>
             <tr>
                <td className="status-deleted"> deleted </td>
                <td className="item-value"> 12 </td>
                <td className="item-value"> 4 </td>
                <td className="item-value"> 8 </td>
                <td className="text-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <circle cx="12.5098" cy="12.5728" r="9" stroke="#33363F"/>
                        <circle cx="12.5098" cy="18.5728" r="0.5" fill="#33363F" stroke="#33363F"/>
                        <path d="M12.5098 16.5728V15.1539C12.5098 14.2097 13.114 13.3713 14.0098 13.0728V13.0728C14.9056 12.7742 15.5098 11.9359 15.5098 10.9916V10.4784C15.5098 8.87368 14.2088 7.57275 12.6041 7.57275H12.5098C10.8529 7.57275 9.50977 8.9159 9.50977 10.5728V10.5728" stroke="#33363F"/>
                    </svg>
                </td>
             </tr>
             <tr>
                <td className="status-disputing"> disputing </td>
                <td className="item-value"> 12 </td>
                <td className="item-value"> 4 </td>
                <td className="item-value"> 8 </td>
                <td className="text-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <circle cx="12.5098" cy="12.5728" r="9" stroke="#33363F"/>
                        <circle cx="12.5098" cy="18.5728" r="0.5" fill="#33363F" stroke="#33363F"/>
                        <path d="M12.5098 16.5728V15.1539C12.5098 14.2097 13.114 13.3713 14.0098 13.0728V13.0728C14.9056 12.7742 15.5098 11.9359 15.5098 10.9916V10.4784C15.5098 8.87368 14.2088 7.57275 12.6041 7.57275H12.5098C10.8529 7.57275 9.50977 8.9159 9.50977 10.5728V10.5728" stroke="#33363F"/>
                    </svg>
                </td>
             </tr>
             <tr>
                <td className="status-negative"> negative </td>
                <td className="item-value"> 12 </td>
                <td className="item-value"> 4 </td>
                <td className="item-value"> 8 </td>
                <td className="text-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <circle cx="12.5098" cy="12.5728" r="9" stroke="#33363F"/>
                        <circle cx="12.5098" cy="18.5728" r="0.5" fill="#33363F" stroke="#33363F"/>
                        <path d="M12.5098 16.5728V15.1539C12.5098 14.2097 13.114 13.3713 14.0098 13.0728V13.0728C14.9056 12.7742 15.5098 11.9359 15.5098 10.9916V10.4784C15.5098 8.87368 14.2088 7.57275 12.6041 7.57275H12.5098C10.8529 7.57275 9.50977 8.9159 9.50977 10.5728V10.5728" stroke="#33363F"/>
                    </svg>
                </td>
             </tr>
          </tbody>
        </table>

         <div className="w-full flex justify-between mt-2">
               <p>
                <span className="credit-item-result">
                Showing results <span className="credit-item-count"> (1-6) out of 50 </span> 
                </span>
               </p>

               <ul className="flex items-center space-x-1 font-light">
                <li
                    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
                >
                    <Link to="/personal-dashboard" className="w-8 h-8 flex items-center justify-center no-underline hover:no-underline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    </Link>
                </li>
                <li
                    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
                >
                    <Link to="/personal-dashboard" className="w-8 h-8 flex items-center justify-center no-underline hover:no-underline">1</Link>
                </li>
                <li className="border rounded-full bg-indigo-500 border-indigo-500">
                    <Link to="/personal-dashboard" className="w-8 h-8 flex items-center justify-center no-underline hover:no-underline text-white">2</Link>
                </li>
                <li
                    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
                >
                    <Link to="/personal-dashboard" className="w-8 h-8 flex items-center justify-center no-underline hover:no-underline">3</Link>
                </li>
                <li
                    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
                >
                    <Link to="/personal-dashboard" className="w-8 h-8 flex items-center justify-center no-underline hover:no-underline">4</Link>
                </li>
                <li
                    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
                >
                    <Link to="/personal-dashboard" className="w-8 h-8 flex items-center justify-center no-underline hover:no-underline">5</Link>
                </li>
                <li
                    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
                >
                    <Link to="/personal-dashboard" className="w-8 h-8 flex items-center justify-center no-underline hover:no-underline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                        />
                    </svg>
                    </Link>
                </li>
                </ul>
         </div>
      </div>
    );
  };


export default function CreditItem() {
  return (
    <div className="w-full bg-white p-5 rounded-[2.9375rem]">
        <div className="w-full flex items-center justify-between mb-2">
        <h3 className="credit-item-heading mb-3"> Credit item  </h3>
        <div className="flex gap-5">

        <button className="select-time border border-[#DFDDDD] bg-white px-3 py-2 flex items-center gap-2">
          Export
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3.91893 12.8258C2.21624 12.8258 0.835938 11.4617 0.835938 9.77905C0.835938 8.09638 2.21624 6.73232 3.91893 6.73232C4.12332 6.73232 4.32307 6.75196 4.51633 6.78951M4.51633 6.78951C4.35153 6.3499 4.26149 5.87445 4.26149 5.37823C4.26149 3.13467 6.1019 1.31592 8.37217 1.31592C10.4869 1.31592 12.2286 2.894 12.4574 4.92353M4.51633 6.78951C4.92237 6.86828 5.29981 7.02582 5.63172 7.24537M9.74242 4.93233C10.1709 4.78263 10.6321 4.70117 11.1126 4.70117C11.5836 4.70117 12.036 4.77944 12.4574 4.92353M12.4574 4.92353C14.0673 5.47403 15.2233 6.98532 15.2233 8.76345C15.2233 10.7108 13.8368 12.3381 11.9861 12.7339" stroke="#333333" stroke-linecap="round"/>
            <path d="M8.02955 14.9842V10.668M8.02955 14.9842L9.46829 13.5454M8.02955 14.9842L6.59082 13.5454" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button className="select-time px-3 py-2 flex items-center gap-2">
          Last 24h
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
            <path d="M11.5151 1.67786C11.8067 1.38366 11.8046 0.908795 11.5104 0.617212C11.2162 0.325628 10.7413 0.327747 10.4497 0.621944L8.70242 2.38491C7.99329 3.10041 7.50525 3.59121 7.09172 3.92331C6.69002 4.24591 6.432 4.35658 6.20093 4.38603C6.05583 4.40453 5.90901 4.40453 5.76392 4.38603C5.53284 4.35658 5.27482 4.24591 4.87313 3.92331C4.4596 3.59121 3.97156 3.10041 3.26242 2.38491L1.51511 0.621944C1.22353 0.327747 0.74866 0.325629 0.454463 0.617212C0.160266 0.908796 0.158148 1.38366 0.449731 1.67786L2.22852 3.47259C2.89846 4.14856 3.44601 4.70104 3.93388 5.09285C4.44121 5.50028 4.95615 5.79521 5.57426 5.87399C5.84529 5.90854 6.11956 5.90854 6.39058 5.87399C7.0087 5.79521 7.52364 5.50027 8.03096 5.09285C8.51884 4.70104 9.06638 4.14857 9.73632 3.4726L11.5151 1.67786Z" fill="#2D264B"/>
          </svg>
        </button>

        </div>
        </div>

        <div className="w-full flex items-center justify-end gap-5 mb-4">
            <button className="credit-item-filter px-3 py-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M3.76366 0.335938C2.19472 0.335938 0.922852 1.60781 0.922852 3.17674C0.922852 3.97304 1.25706 4.73278 1.84406 5.27086L4.03235 7.27679C4.62317 7.81838 4.95956 8.58307 4.95956 9.38456V12.2779C4.95956 13.5303 6.38039 14.2538 7.39325 13.5172L8.6993 12.5673C9.30858 12.1242 9.66905 11.4163 9.66905 10.6629V9.46495C9.66905 8.62388 10.0394 7.82546 10.6814 7.28217L13.0499 5.27812C13.6792 4.7456 14.0422 3.96301 14.0422 3.1386C14.0422 1.59073 12.7874 0.335938 11.2395 0.335938H3.76366ZM1.93203 3.17674C1.93203 2.16516 2.75208 1.34511 3.76366 1.34511H11.2395C12.23 1.34511 13.033 2.14809 13.033 3.1386C13.033 3.66616 12.8007 4.16696 12.398 4.50773L10.0296 6.51178C9.16088 7.24682 8.65988 8.32703 8.65988 9.46495V10.6629C8.65988 11.0934 8.45389 11.4979 8.10573 11.7511L6.79968 12.701C6.45386 12.9525 5.96874 12.7055 5.96874 12.2779V9.38456C5.96874 8.30019 5.51362 7.26561 4.71427 6.53287L2.52598 4.52694C2.14751 4.18001 1.93203 3.69016 1.93203 3.17674Z" fill="#1380FF"/>
            </svg>
            Filter
            </button>
            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="6" height="15" viewBox="0 0 6 15" fill="none">
            <ellipse cx="3.25806" cy="12.4854" rx="1.63024" ry="2.31063" transform="rotate(-90.2679 3.25806 12.4854)" fill="#333333"/>
            <ellipse cx="3.23267" cy="7.18661" rx="1.63024" ry="2.31063" transform="rotate(-90.2679 3.23267 7.18661)" fill="#333333"/>
            <ellipse cx="3.20727" cy="1.88827" rx="1.63024" ry="2.31063" transform="rotate(-90.2679 3.20727 1.88827)" fill="#333333"/>
            </svg>
        </div>
          
          <CreditTable/>
   
    </div>
  );
}
