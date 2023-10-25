import React from 'react'
import Installment from '../../assets/installment.svg'
import duePayment from '../../assets/due-payment.svg'

const Categories = () => {
  return (
    <div className='w-full'>
        
        <h3 className='categories-heading'>
        Categories
        </h3>
        <p className='categories-sub-heading'>
        Organize your finances
        </p>
        <div className='installment w-full flex items-center gap-5 p-3'>
            <img src={Installment} alt='' className='w-[70px] h-[70px]' />
            <div className='flex flex-col gap-1'>
              <p className='p-0 m-0 installment-title'>
                installment
              </p>
              <p className='p-0 m-0 installment-name'>
                Redclif John
              </p>
            </div>
            <p className='p-0 m-0 installment-amount ml-auto'>
               $230
            </p>
        </div>

        <div className='due-payment w-full flex items-center gap-5 p-3 mt-[2rem]'>
            <img src={duePayment} alt='' className='w-[70px] h-[70px]' />
            <div className='flex flex-col gap-1'>
              <p className='p-0 m-0 installment-title'>
                Due payments
              </p>
              <p className='p-0 m-0 installment-name'>
                jonathan@gmail.com
              </p>
            </div>
            <p className='p-0 m-0 installment-amount ml-auto'>
               $230
            </p>
            <div className='absolute top-2 right-2 bg-[#38B000] rounded-[1.125rem] font-[Spartan] text-white font-[700] px-3 py-1 text-[0.75rem] leading-normal'>
                New
            </div>
        </div>
    </div>
  )
}

export default Categories