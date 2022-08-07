import {configureStore} from '@reduxjs/toolkit'
import postRedcer from './slices/postSlice'; 
// import userRedcer from './slices/userSlice'; 

export default configureStore({
    reducer: {
        posts: postRedcer,
    }
})