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
import CreditItem from './CreditItem';
import Categories from './Categories';
import Accounts from './Accounts';
import Calendar from './Calendar';
import UpcomingTask from './UpcomingTask';

const PersonalDashboardUI = () => {
  return (
    <Layout>
      <div className='pr-[2rem] pb-[5rem]'>
      <h2 className="flex items-center gap-3 capitalize text-[#231F20] leading-both font-[Spartan] text-[4rem] font-[700]">
      my dashboard <img className='' src={mark} alt="" />
      </h2>

      <div className='w-full flex gap-3 mt-[2rem]'>
           <Profile/>
           <DisputeProgress/>
           <YourCard/>
      </div>
      <div className='mt-[3rem] flex gap-5'>
        <div className='w-[70%] flex flex-col gap-[3rem]'>
         <ProgressByTypes/>
         <DisputeInProgress/>
         <PublishDoc/>
         <MyScore/>
         <CreditItem />
        </div>
        <div className='flex-1 flex flex-col gap-[3rem]'>
          <Categories/>
          <Accounts/>
          <Calendar/>
          <UpcomingTask/>
        </div>
      </div>
     
      </div>
    </Layout>
  )
}

export default PersonalDashboardUI