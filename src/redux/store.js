import {configureStore} from '@reduxjs/toolkit'
import postRedcer from './reducers/postSlice'; 
import userRedcer from './reducers/userSlice'; 
import createPostModalSlice from './reducers/createPostModalSlice';


const store = configureStore({
    reducer: {
        posts: postRedcer,
        users: userRedcer,
        postModal: createPostModalSlice,
    }
});

export default store; 