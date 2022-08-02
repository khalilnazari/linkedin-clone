import React from 'react'
import './leftCol.scss';

function LeftCol() {
  return (
    <div className="feed-left-col"> 
        <div className="porfile-summary feed-left-col-section"> 
            <img src="https://millercenter.rutgers.edu/wp-content/uploads/2021/05/Home-Four-Banner-Background-Image.png" className="profile-bunner" alt="" /> 
            <div className="profile-summary-body"> 
                <a href="/" className='profile-wrapper'>
                    <img src="https://pbs.twimg.com/profile_images/1508985474211201025/rOBWvn0-_400x400.jpg" className="profile-avatar" alt="" /> 
                    <div className="profile-detail-section"> 
                        <h4>Khalil Nazari</h4> 
                        <p>Web Developer</p>
                    </div>
                </a>
                
                <div className="view"> 
                    <a href='/' className='view-item link'>
                        <span className='view-text'>Who's viewed your profile</span>
                        <span className='view-count'>35</span>
                    </a>
                    <a href='/' className='view-item link'>
                        <span className='view-text'>Impressions of your post</span>
                        <span className='view-count'>199</span>
                    </a>
                </div> 
                <a href='/' className="bookmarks"> 
                    <i class="fa-solid fa-bookmark"></i>
                    <span>My items</span>
                </a> 
            </div>  
        </div> 

        <div className="activities feed-left-col-section">
            <div className="activities-section"> 
                <p className='activities-title'>Recent</p> 
                <a href='/' className='activity-link'>
                <i class="fa-solid fa-people-group"></i>
                    <span className='view-text'>ReactJs Developers</span>
                </a>
                <a href='/' className='activity-link'>
                    <i class="fa-solid fa-hashtag"></i>
                    <span className='view-text'>Career</span>
                </a>
                <a href='/' className='activity-link'>
                    <i class="fa-solid fa-hashtag"></i>
                    <span className='view-text'>web development</span>
                </a>
            </div> 

            <div className="activities-section"> 
                <p className='activities-title groups-title'>Groups</p> 
                <a href='/' className='activity-link'>
                    <i class="fa-solid fa-people-group"></i>
                    <span className='view-text'>ReactJs Developers</span>
                </a>
                <a href='/' className='activity-link'>
                    <i class="fa-solid fa-people-group"></i>
                    <span className='view-text'>Career</span>
                </a>
                <a href='/' className='activity-link'>
                    <i class="fa-solid fa-people-group"></i>
                    <span className='view-text'>web development</span>
                </a>
            </div> 

            <a href="/" className='discover-more'>Discover more</a>
        </div> 
    </div> 
  )
}

export default LeftCol