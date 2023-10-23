import React from 'react'

const Profile = () => {
  return (
    <div className='profile w-[30%] flex flex-col gap-3 items-center justify-center'>
            
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
  )
}

export default Profile