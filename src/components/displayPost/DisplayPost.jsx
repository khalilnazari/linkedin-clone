import React, {useState } from 'react'
import './displayPost.scss'; 
import moment from 'moment';
import { useDispatch } from 'react-redux/es/exports';
import CreatePostModal from '../createPostModal/CreatePostModal';
import { deletePostAPI } from '../../redux/api'
import { deletePost } from '../../redux/reducers/postSlice'

const DisplayPost = ({post}) => {
    const dispatch = useDispatch(); 

    // Local Componenent: reaction button component
    const ReactionButton = ({text, icon}) => (
        <button> 
            <i className={`fa-solid ${icon} reaction-btn-icon`}></i>  
            <span className="reaction-btn-text">{text}</span> 
        </button>
    ); 
    
    const [showPostEditMenu, setShowPostEditMenu] = useState(false); 
    const [hideModal, setHideModal] = useState(true); 
    const [editPostData, setEditPostData] = useState({}); 

    // togllge post update menu 
    const togglePostUpdateMenu  = () => {
        setShowPostEditMenu(prev => !prev)
    } 

    // edit post
    const editPost = (data) => {
        setEditPostData({...data, postEditMode:true})
        setHideModal(!hideModal)
    }

    // handleDeletePostAPI
    const handleDeletePostAPI = async (id) => {
        try {
            const response = await deletePostAPI(id); 
            if(response.status === 201) {
                dispatch(deletePost(id)); 
                alert(response.data); 
            }
        } catch (error) {
            alert(error.response.statusText + ". Please try again later!"); 
        }
    }

    // handleDeletePost
    const handleDeletePost = (id) => {
        const permissionText = window.confirm("Are you sure to delete this post?"); 
        if(permissionText === true) {
            handleDeletePostAPI(id); 
        }
    }

    // jsx
    return (
        <>
        <div className="display-post"> 
            <div className="display-post-header"> 
                <div className="user-avatar"> 
                    <img src={post.creatorAvatar} alt="user-avatar" className='user-avatar-img'/>
                </div> 
                <div className="user-detail"> 
                    <p className='user-name'>{post.creatorName}</p>
                    <span className='user-title'>{post.creatorOccupation}</span> <br />
                    <span>{moment(post.createdAt).fromNow()}</span> . <i className="fa-solid fa-earth-asia"></i> 
                </div> 

                <div className="update-menu"> 
                    <button onClick={togglePostUpdateMenu}><i className="fa-solid fa-ellipsis menu-icon"></i></button>
                    <div className={`menu-list ${showPostEditMenu && "show-menu-list"}`}>
                        <span onClick={e=>editPost(post)}><i className="fa-solid fa-pen"></i> Edit</span>
                        <span onClick={e=>handleDeletePost(post._id)}><i className="fa-solid fa-trash-can"></i> Delete</span>
                    </div>
                </div> 
            </div>

            <div className="display-post-text"> 
                <p>{post.postText}</p>
            </div> 

            {post.postImage && <img src={post.postImage} className="display-post-media" alt="post media" />}
            
            <div className="display-post-reaction"> 
                <div className="reaction-btns"> 
                    <ReactionButton icon="fa-thumbs-up" text="Like" />
                    <ReactionButton icon="fa-message" text="Comemnt" />
                    <ReactionButton icon="fa-share-nodes" text="Share" />
                    <ReactionButton icon="fa-paper-plane" text="Send" />
                </div> 
            </div> 
        </div>
        {!hideModal && <CreatePostModal hideModal={hideModal} editPostData={editPostData}/>}
        </>
    )
}

export default DisplayPost