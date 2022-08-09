import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './createPost.scss'; 
import CreatePostModal from '../createPostModal/CreatePostModal'; 
import { toggleModal } from '../../redux/slices/updatePostModal';

const CreatePost = () => {
    const {profileImg} = JSON.parse(localStorage.getItem("linkedinUser")); 
    const [modal, setModal] = useState(true); 
    const {postModal} = useSelector(state => state.postModal); 
    const dispatch = useDispatch(); 
    
    const handlePostModal = () => {
        console.log("handlePostModal")
        dispatch(toggleModal(!postModal));
    }

    return (
        <div className="create-post"> 
            <div className="create-post-wrapper"> 
                <div className="create-post-input"> 
                    <img src={profileImg} className="create-post-avatar" alt="user profile"/> 
                    <button onClick={e=>handlePostModal()} className="create-post-input-field">Start a post</button> 
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

            <CreatePostModal showModal={modal}/>
        </div>
    )
}

export default CreatePost