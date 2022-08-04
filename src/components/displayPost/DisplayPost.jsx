import React from 'react'
import './displayPost.scss'; 

const DisplayPost = () => {
    const ReactionButton = ({text, icon}) => (
        <button> 
            <i className={`fa-solid ${icon} reaction-btn-icon`}></i>  
            <span className="reaction-btn-text">{text}</span> 
        </button>
    ); 


  return (
    <div className="display-post"> 
        <div className="display-post-header"> 
            <div className="user-avatar"> 
                <img src="https://cdn.imgbin.com/15/10/13/imgbin-computer-icons-user-profile-avatar-profile-LJbrar10nYY8mYWt0CUXZ8CxE.jpg" alt="user-avatar" className='user-avatar-img'/>
            </div> 
            <div className="user-detail"> 
                <p className='user-name'>Khalil Ahmad</p>
                <span className='user-title'>User Title</span> <br />
                <span>9h</span> . <i className="fa-solid fa-earth-asia"></i> 
            </div> 

            <div className="menu"> 
                <i className="fa-solid fa-ellipsis"></i> 
            </div> 
        </div>

        <div className="display-post-text"> 
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia</p>
        </div> 

        <img src="https://st2.depositphotos.com/4164031/7029/i/600/depositphotos_70298419-stock-photo-deep-space.jpg" className="display-post-media" alt="post media" /> 
        
        <div className="display-post-reaction"> 
            <div className="reaction-btns"> 
                <ReactionButton icon="fa-thumbs-up" text="Like" />
                <ReactionButton icon="fa-message" text="Comemnt" />
                <ReactionButton icon="fa-share-nodes" text="Share" />
                <ReactionButton icon="fa-paper-plane" text="Send" />
            </div> 
        </div> 
    </div>
  )
}

export default DisplayPost