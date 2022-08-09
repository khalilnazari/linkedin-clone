import React, { useEffect, useState } from 'react'
import './createPost.scss'; 
import {createPost} from '../../redux/api'
import {useDispatch} from 'react-redux'; 
import {addPost} from '../../redux/slices/postSlice'

const CreatePost = () => {
    const {_id, firstName, lastName, occupation, profileImg} = JSON.parse(localStorage.getItem("linkedinUser")); 
    const dispatch = useDispatch(); 
    const [displayModal, setDisplayModal] = useState(true); 
    const [postText, setPostText] = useState(''); 
    const [postImage, setPostImage] = useState(''); 
    const [post, setPost] = useState(''); 

    useEffect(() => {
        setPost({...post, creatorId: _id, creatorName: firstName+" "+lastName, creatorAvatar: profileImg, creatorOccupation: occupation}); 
    }, []); 

    // Open & close modal
    const handleModal = () => {
        setDisplayModal(prev => !prev); 
        if(displayModal) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        } else {
            window.onscroll = function() {};
        }
    }

    // change postText change
    const handlePostText = (e) => {
        setPostText(e.target.value); 
        setPost({...post, postText: e.target.value }); 
    } 

    // change postImage change
    const handlePostImage = (e) => {
        setPostImage(e.target.value);
        setPost({...post, postImage: e.target.value })
    } 
    
    // createPost
    const createNewPost = async (data) => {
        try {
            const response = await createPost(data); 
            dispatch(addPost(response.data))
        } catch (error) {
            console.log(error)
        }
    }

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(JSON.stringify(post) === '{}'){
            console.log("empy")
        }

        return;  
        // send post to api
        createNewPost(post); 

        // close modal 
        handleModal(); 

        // empty feild
        setPostImage('')
        setPostText('')
    } 

    return (
        <div className="create-post"> 
            <div className="create-post-wrapper"> 
                <div className="create-post-input"> 
                    <img src={profileImg} className="create-post-avatar" alt="user profile"/> 
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

            <div className={`create-post-modal ${displayModal && "close-modal"}`}>
                <div className="post-modal-wrapper">
                    <div className="modal-header">
                        <p>Create Post</p>
                        <button type='button' onClick={handleModal}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='modal-body'>
                            <input 
                                type="text" 
                                name="postText" 
                                onChange={e=>handlePostText(e)} 
                                placeholder="Write post" 
                                value={postText} 
                                required
                                />
                            
                            <input 
                                type="text" 
                                name='postImage' 
                                placeholder='Insert image link' 
                                onChange={e=>handlePostImage(e)} 
                                value={postImage}/>
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