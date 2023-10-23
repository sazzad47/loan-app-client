import React from 'react'
import Layout from './layout'
import mark from "../../assets/mark.svg"
import "./final.css";
import Profile from './Profile';
import DisputeProgress from './DisputeProgress';
import YourCard from './YourCard';
import ProgressByTypes from './ProgressByTypes';
import DisputeInProgress from './DisputeInProgress';
import PublishDoc from './PublishDoc';
import MyScore from './MyScore';

const PersonalDashboardUI = () => {
  return (
    <Layout>
      <div className='pr-[2rem]'>
      <h2 className="flex items-center gap-3 capitalize text-[#231F20] leading-both font-[Spartan] text-[4rem] font-[700]">
      my dashboard <img className='' src={mark} alt="" />
      </h2>

      <div className='w-full flex gap-3 mt-[2rem]'>
           <Profile/>
           <DisputeProgress/>
           <YourCard/>
      </div>
      <div className='mt-[3rem]'>
        <ProgressByTypes/>
      </div>
      <div className='mt-[3rem]'>
        
        <DisputeInProgress/>
      </div>
      <div className='mt-[3rem]'>
        
        <PublishDoc/>
      </div>
      <div className='mt-[3rem]'>
        
        <MyScore/>
      </div>
      </div>
    </Layout>
  )
}

export default PersonalDashboardUI