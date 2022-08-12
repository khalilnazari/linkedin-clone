import React, {useState } from 'react'
import './displayPost.scss'; 
import moment from 'moment';
import {togglePostModal} from '../../redux/reducers/createPostModalSlice'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import CreatePostModal from '../createPostModal/CreatePostModal';


const DisplayPost = ({post}) => {
    // reaction button component
    const ReactionButton = ({text, icon}) => (
        <button> 
            <i className={`fa-solid ${icon} reaction-btn-icon`}></i>  
            <span className="reaction-btn-text">{text}</span> 
        </button>
    ); 
    
    // const {toggleModal} = useSelector(state => state.postModal); 
    // const dispatch = useDispatch(); 
    const [showPostEditMenu, setShowPostEditMenu] = useState(false); 
    const [hideModal, setHideModal] = useState(true); 
    const [editPostData, setEditPostData] = useState({}); 

    // togllge post update menu 
    const togglePostUpdateMenu  = () => {
        setShowPostEditMenu(prev => !prev)
    } 

    // edit 
    const editPost = (data) => {
        setEditPostData(data)
        setHideModal(!hideModal)
        // dispatch(togglePostModal({toggleModal: !toggleModal, editPostData:editPostData})); 
    }

    // delete
    const deletePost = () => {
        console.log('delete post')
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
                        <span onClick={e=>deletePost(post)}><i className="fa-solid fa-trash-can"></i> Delete</span>
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