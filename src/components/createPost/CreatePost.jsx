import React from 'react'
import './createPost.scss'; 

const CreatePost = () => {
  return (
    <div className="create-post"> 
        <div className="create-post-wrapper"> 
            <div className="create-post-input"> 
                <img src="https://pbs.twimg.com/profile_images/1508985474211201025/rOBWvn0-_400x400.jpg" className="create-post-avatar" alt="user profile"/> 
                <button id="" className="create-post-input-field">Start a post</button> 
            </div> 
            <div className="create-post-media-wrapper"> 
                <div className="ceate-post-media"> 
                    <i className="fa-solid fa-image media-icon photo"></i> 
                    <span className="media-text">Photo</span> 
                </div> 
                <div className="ceate-post-media"> 
                    <i className="fa-solid fa-video media-icon video"></i> 
                    <span className="media-text">Video</span> 
                </div> 

                <div className="ceate-post-media"> 
                    <i className="fa-solid fa-calendar-days media-icon event"></i> 
                    <span className="media-text">Event</span> 
                </div> 

                <div className="ceate-post-media"> 
                    <i className="fa-solid fa-newspaper media-icon article"></i> 
                    <span className="media-text">Write Article</span> 
                </div> 
            </div> 
        </div> 
    </div>
  )
}

export default CreatePost