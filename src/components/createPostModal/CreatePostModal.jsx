import React, {useState, useEffect} from 'react'
import { createPostAPI, updatePostAPI } from '../../redux/api'
import {useDispatch, useSelector} from 'react-redux'; 
import { addPost, updatePost } from '../../redux/reducers/postSlice'
import {togglePostModal} from '../../redux/reducers/createPostModalSlice'


const CreatePostModal = ({hideModal, editPostData={}}) => {
    const dispatch = useDispatch(); 
    const {firstName, lastName, occupation, profileImg} = JSON.parse(localStorage.getItem("linkedinUser")); 
    const userId = JSON.parse(localStorage.getItem("linkedinUser"))._id; 
    // const {toggleModal, editPostData} = useSelector(state => state.postModal); 
    const {postText, postImage, _id} = editPostData || {}; 
    
    const [thePostText, setThePostText] = useState(postText || ""); 
    const [thePostImage, setThePostImage] = useState(postImage || "");
    const [post, setPost] = useState(''); 
    const [toggleModal, setToggleModal] = useState(hideModal); 

    // Open & close modal
    const handlePostModal = () => {
        setToggleModal(!toggleModal); 
        // dispatch(togglePostModal({toggleModal: !toggleModal})); 
        if(toggleModal) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        } else {
            window.onscroll = function() {};
        }
    }

    useEffect(() => {
        if(postText){
            setPost({...post, _id: _id}); 
        } else {
            setPost({...post, creatorId: userId, creatorName: firstName+" "+lastName, creatorAvatar: profileImg, creatorOccupation: occupation}); 
        }
    },[_id, firstName, lastName, profileImg, occupation]); 


    // change postText change
    const handlePostText = (e) => {
        setThePostText(e.target.value); 
        setPost({...post, postText: e.target.value }); 
    } 

    // change postImage change
    const handlePostImage = (e) => {
        setThePostImage(e.target.value);
        setPost({...post, postImage: e.target.value })
    } 
    
    // createPost
    const createNewPost = async (data) => {
        try {
            const response = await createPostAPI(data); 
            dispatch(addPost(response.data))
        } catch (error) {
            console.log(error)
        }
    }

    
    // update post 
    const updateExistingPost = async (data) => {
        try {
            const response = await updatePostAPI(data);
            dispatch(updatePost(response.data)); 
        } catch (error) {
            console.log(error)
        }
    }


    // submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(postText) {
            updateExistingPost(post)
        } else {
            createNewPost(post);
        }
        // close modal 
        handlePostModal(); 

        // empty feild
        setThePostText('')
        setThePostImage('')
    } 

    
    // jsx
    return (
        <div className={`create-post-modal ${toggleModal && "close-modal"}` }>
            <div className="post-modal-wrapper">
                <div className="modal-header">
                    <p>Create Post</p>
                    <button type='button' onClick={e=>handlePostModal()}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='modal-body'>
                        <input 
                            type="text" 
                            name="postText" 
                            onChange={handlePostText} 
                            placeholder="Write post"
                            value={thePostText} 
                            required
                        />
                        
                        <input 
                            type="text" 
                            name='postImage' 
                            placeholder='Insert image link' 
                            onChange={handlePostImage} 
                            value={thePostImage}
                        />
                    </div>

                    <div className='modal-footer'>
                        <button type='submit' className='post-btn'>{editPostData ? "Update" : "Post"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePostModal