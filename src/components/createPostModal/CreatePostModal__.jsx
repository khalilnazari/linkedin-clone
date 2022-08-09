import React, {useState, useEffect} from 'react'
import {createPost} from '../../redux/api'
import {useDispatch} from 'react-redux'; 
import {addPost} from '../../redux/slices/postSlice'


const CreatePostModal = ({handleModal}) => {
    const {_id, firstName, lastName, occupation, profileImg} = JSON.parse(localStorage.getItem("linkedinUser")); 
    const dispatch = useDispatch(); 
    const [displayModal, setDisplayModal] = useState(true); 
    const [postText, setPostText] = useState(''); 
    const [postImage, setPostImage] = useState(''); 
    const [post, setPost] = useState(''); 


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
        handleModal(); 

        // empty feild
        setPostImage('')
        setPostText('')
    } 

    // jsx
    return (
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
    )
}

export default CreatePostModal