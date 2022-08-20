import React from 'react'
import './rightCol.scss'

const RightCol = () => {
    const FeedItem = ({img, name, desc}) => (
        <div className="feed-right-item"> 
            <img src={img} alt="user-avata" className="avatar"/>
            <div className="feed-item-detail">
                <p className='item-title'>{name}</p>
                <p className='user-type'>{desc}</p>
                <button className='follow-btn'><i className="fa-solid fa-plus"></i> Follow</button>
            </div>
        </div> 
    ); 


    return (
        <div className="feed-right-col"> 
            <div className="feed-right-section add-users"> 
                <div className="feed-right-header "> 
                    <p className='header-title'>Add to your feed</p> 
                    <i className="fa-solid fa-circle-info"></i> 
                </div> 
                
                <FeedItem 
                    img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                    name="Google"
                    desc="Company . internet"
                />
                <FeedItem 
                    img="https://icon-library.com/images/icon-users/icon-users-13.jpg"
                    name="John Doe"
                    desc="Softare Engineer at google, Web Developer, Writer, Reader"
                />
                <FeedItem 
                    img="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" 
                    name="Facbook"
                    desc="Social Media Platform"
                />

                <a href="/" className='recommend-btn'><span>View all recommendation</span> <i className="fa-solid fa-arrow-right-long"></i></a>
            </div> 

            <div className="feed-right-section ad"> 
                <div className="ad-header "> 
                    <p>Ad</p> 
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
                <p className='ad-title'>Get the latest jobs and industry news</p> 
                <div className="ad-avatar"> 
                    <img src="https://pbs.twimg.com/profile_images/1508985474211201025/rOBWvn0-_400x400.jpg" alt="" />
                    <a href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" />
                    </a>
                </div> 
                <div className='ad-about'>
                    <p>Khalil, explore relevant opportunities with</p>
                    <span>Google</span>
                    <button className='follow-btn ad-btn'>Follow</button>
                </div>
            </div> 
        </div>
    )
}

export default RightCol; 