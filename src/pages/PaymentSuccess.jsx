import React from "react";
import { Link } from "react-router-dom";
import {BiErrorCircle} from "react-icons/bi";

const PaymentSuccess = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const redirect_status = queryParameters.get("redirect_status");



  console.log('redirect_status', redirect_status)
  return (
    <div className="w-full h-screen flex justify-between items-center">
     
      <div
        id="successModal"
        tabindex="-1"
    
        className="overflow-y-auto w-[400px] max-w-full mx-auto overflow-x-hidden justify-center items-center"
      >
        <div className="relative p-4 max-w-md h-full md:h-auto">
          <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
              {redirect_status === "failed"? <BiErrorCircle className="text-2xl"/> :  <svg
                aria-hidden="true"
                className="w-8 h-8 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg> }
             
            </div>
            <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Payment {redirect_status === "failed"? "failed!" : "successful!" }
            </p>
            <Link to="/personal-account">
            <button
              data-modal-toggle="successModal"
              type="button"
              className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Continue
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
