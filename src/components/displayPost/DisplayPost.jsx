import React from 'react'
import './displayPost.scss'; 

const DisplayPost = ({post}) => {

    // reaction button component
    const ReactionButton = ({text, icon}) => (
        <button> 
            <i className={`fa-solid ${icon} reaction-btn-icon`}></i>  
            <span className="reaction-btn-text">{text}</span> 
        </button>
    ); 

    // jsx
    return (
        <div className="display-post"> 
            <div className="display-post-header"> 
                <div className="user-avatar"> 
                    <img src={post.postImg} alt="user-avatar" className='user-avatar-img'/>
                </div> 
                <div className="user-detail"> 
                    <p className='user-name'>{post.creator}</p>
                    <span className='user-title'>User Title</span> <br />
                    <span>9h</span> . <i className="fa-solid fa-earth-asia"></i> 
                </div> 

                <div className="menu"> 
                    <i className="fa-solid fa-ellipsis"></i> 
                </div> 
            </div>

            <div className="display-post-text"> 
                <p>{post.postText}</p>
            </div> 

            <img src={post.postImg} className="display-post-media" alt="post media" /> 
            
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