import {configureStore} from '@reduxjs/toolkit'
import postRedcer from './slices/postSlice'; 
import userRedcer from './slices/userSlice'; 


const store = configureStore({
    reducer: {
        posts: postRedcer,
        users: userRedcer,
    }
})

// test store.
// console.log(store.getState())

export default store; 