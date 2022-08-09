import React, {useState, useEffect} from 'react'
import {createPost} from '../../redux/api'
import {useDispatch, useSelector} from 'react-redux'; 
import {addPost} from '../../redux/slices/postSlice'
import {toggleModal} from '../../redux/slices/updatePostModal'

const CreatePostModal = () => {
    const {postModal} = useSelector(state => state.postModal);
    const {_id, firstName, lastName, occupation, profileImg} = JSON.parse(localStorage.getItem("linkedinUser")); 
    const dispatch = useDispatch(); 
    const [postText, setPostText] = useState(''); 
    const [postImage, setPostImage] = useState(''); 
    const [post, setPost] = useState(''); 
    const [displayModal, setDisplayModal] = useState(false); 

    // Open & close modal
    const handlePostModal = () => {
        dispatch(toggleModal(!postModal)); 

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

    useEffect(() => {
        setPost({...post, creatorId: _id, creatorName: firstName+" "+lastName, creatorAvatar: profileImg, creatorOccupation: occupation}); 
    }, []); 


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
    
        // send post to api
        createNewPost(post); 

        // close modal 
        handlePostModal(); 

        // empty feild
        setPostImage('')
        setPostText('')
    } 

    
    // jsx
    return (
        <div className={`create-post-modal ${postModal && "close-modal"}` }>
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
                            value={postText} 
                            required
                            />
                        
                        <input 
                            type="text" 
                            name='postImage' 
                            placeholder='Insert image link' 
                            onChange={handlePostImage} 
                            value={postImage}/>
                    </div>

                    <div className='modal-footer'>
                        <button type='submit' className='post-btn'>Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePostModal