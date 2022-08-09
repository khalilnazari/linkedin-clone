import {configureStore} from '@reduxjs/toolkit'
import postRedcer from './slices/postSlice'; 
import userRedcer from './slices/userSlice'; 
import updatePostModal from './slices/updatePostModal';


const store = configureStore({
    reducer: {
        posts: postRedcer,
        users: userRedcer,
        postModal: updatePostModal,
    }
});

export default store; 