import React, { useState } from 'react'
import './createPost.scss'; 
import {createPost} from '../../redux/api'

const CreatePost = () => {
    const [displayModal, setDisplayModal] = useState(false); 
    const [post, setPost] = useState(''); 
    
    const handleChange = (e) => {
        setPost({...post, [e.target.name]:e.target.value});
    }

    const handleModal = () => {
        setDisplayModal(prev => !prev); 
        
        if(!displayModal) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        } else {
            window.onscroll = function() {};
        }
    }
    
    const createNewPost = async (post) => {
        try {
            const response = await createPost(post); 
            
        } catch (error) {
            console.log(error)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        createNewPost(post)
    } 

    return (
        <div className="create-post"> 
            <div className="create-post-wrapper"> 
                <div className="create-post-input"> 
                    <img src="https://pbs.twimg.com/profile_images/1508985474211201025/rOBWvn0-_400x400.jpg" className="create-post-avatar" alt="user profile"/> 
                    <button id="" className="create-post-input-field" onClick={handleModal}>Start a post</button> 
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


            <div className={`create-post-modal ${!displayModal && "close-modal"}`}>
                <div className="post-modal-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <p>Create Post</p>
                            <button onClick={handleModal}><i className="fa-solid fa-xmark"></i></button>
                        </div>

                        <div className='modal-body'>
                            <textarea name="postText" id="" rows="10" onChange={handleChange} placeholder="Write post"></textarea>
                            <input type="text" name='postImg' placeholder='Insert image link' onChange={handleChange}/>
                        </div>

                        <div className='modal-footer'>
                            <button type='submit' className='post-btn'>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePost