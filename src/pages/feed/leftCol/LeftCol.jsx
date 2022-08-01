import React from 'react'
import './leftCol.scss';

function LeftCol() {
  return (
    <div className="feed-left-col"> 
        <div className="porfile-summary feed-left-col-section"> 
            <img src="https://millercenter.rutgers.edu/wp-content/uploads/2021/05/Home-Four-Banner-Background-Image.png" className="profile-bunner" alt="" /> 
            <div className="profile-summary-body"> 
                <img src="https://pbs.twimg.com/profile_images/1508985474211201025/rOBWvn0-_400x400.jpg" className="profile-avatar" alt="" /> 
                <div className="profile-detail"> 
                    <div className="profile-detail-section"> 
                        <h4>Khalil Nazari</h4> 
                    </div> 
                    <hr /> 
                    <div className="profile-detail-section"> 
                        <h4>Viewers</h4> 
                    </div> 
                    <hr /> 
                    <div className="profile-detail-section"> 
                        <h4>Connections</h4> 
                    </div> 
                </div> 
            </div>  
        </div> 

        <div className="recent-activities feed-left-col-section"> 
            <h4>Recent</h4> 
            <div> 
                #programming 
            </div> 
            <div> 
                #coding 
            </div> 
        </div> 
    </div> 
  )
}

export default LeftCol