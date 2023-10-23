import React from 'react'
import { Mastercard } from './icons/Mastercard'

const YourCard = () => {
  return (
    <div className='w-[30%] h-full rounded-[2.625rem] border border-[#D9D9D9] p-3'>
        <h2 className='your-card-heading'>
            Your card
        </h2>
        <p className='your-card-amount'>
        $ 1,224.50
        </p>
        <p className='your-card-date'>
        Monday, 07 September 2023
        </p>
        <div className='your-card-credit-card'>
            <div className='full p-4 flex flex-col h-full justify-between'>
                 <div className='flex justify-between items-start'>
                    <div>
                        <p className='current-balance'> 
                        current balance
                        </p>
                        <p className='amount'>
                        $ 1,224.50
                        </p>
                    </div>
              
                    <Mastercard/>
                 </div>
                 <div className='w-full flex justify-between'>
                    <p className='card-number'>
                    5287  3456  789- 1289
                    </p>
                    <p className='card-date'>
                    09/25
                    </p>
                 </div>

            </div>
          
        </div>

        <div className="w-full flex justify-between gap-3 mt-5">
             <div className='flex flex-col min-h-full justify-between flex-1'>
                 <p className='last-payment-details'>
                  Last payment details
                 </p>
                 <div className='w-full flex justify-between'>
                   <div className='flex flex-col'>
                     <p className='amount-paid'>
                      amount paid
                     </p>
                     <p className='amount-paid-amount'>
                      $ 320.50
                     </p>
                   </div>
                   <div className='flex flex-col'>
                     <p className='amount-paid'>
                      amount paid
                     </p>
                     <p className='amount-paid-amount'>
                      $ 320.50
                     </p>
                   </div>
                 </div>
             </div>

             <div className='invoice p-2 flex flex-col gap-1 items-center'>
                <h3 className='py-0 my-0 heading'> Invoice </h3>
                <p className='py-0 my-0 date'> 27/08/2023 </p>
                <p className='py-0 my-0 to'> To </p>
                <p className='py-0 my-0 date'> 01/09/2023 </p>
                <button className='download px-3 py-2'> Download </button>
             </div>
        </div>
          
    </div>
  )
}

export default YourCard