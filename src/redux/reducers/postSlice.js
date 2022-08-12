import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    loading: false,
    error: null,
}

const postSlices = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPosts: (state, action) => {
            state.posts = action.payload; 
        }, 
        addPost: (state, action) => {
            state.posts = [action.payload, ...state.posts];
        },
        updatePost: (state, action) => {
            state.posts = state.posts.map(post => post._id === action.payload._id ? action.payload : post);
        }, 
        deletePost: (state, action) => {
            state = state.filter(post => post._id !== action.payload._id)
        }
    }
}); 


// actions
export const {getPosts, addPost, updatePost, deletePost} = postSlices.actions;

// reducer 
export default postSlices.reducer; 