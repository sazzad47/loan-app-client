import React from 'react'
import Layout from './layout'
import mark from "../../assets/mark.svg"
import "./final.css";

const PersonalDashboardUI = () => {
  return (
    <Layout>
      <h2 className="flex items-center gap-3 capitalize text-[#231F20] leading-both font-[Spartan] text-[4rem] font-[700]">
      my dashboard <img className='' src={mark} alt="" />
      </h2>

      <div className='w-full grid grid-cols-3 gap-2'>
           <div className='profile w-full flex flex-col gap-3 items-center justify-center'>
            
              <div className="img">
                    <div className="ellipse-2" />
                    <div className="ellipse-3" />

                    <div className="progress-stars">
                      <div className="stars-rating">
                        <div className="star" />
                        <div className="star-2" />
                        <div className="star-3" />
                      </div>
                      <div className="little-progress-bar">
                        <div className="rectangle-3" />
                      </div>
                    </div>

                    <div className="little-doc-right">
                      <div className="overlap-group-3">
                        <div className="rectangle-4" />
                        <div className="rectangle-5" />
                        <div className="rectangle-6" />
                      </div>
                      <img
                        className="line"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6523645162f75e9352093e34/img/line-99.svg"
                      />
                   </div>

              </div>
               
              <div className="welcome-back">Welcome Back</div>
              <div className="fred-jonathan">Fred Jonathan !</div>
              <div className="group">
                <button className="update-profile-wrapper">
                   Update Profile
                </button>
              </div>

           </div>
      </div>
    </Layout>
  )
}

export default PersonalDashboardUI