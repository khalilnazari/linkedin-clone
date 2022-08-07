import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {postText:"Static post 1", _id:1, creator:"Khalil Ahmad", postImg:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg'}, 
        {postText:"Static post text 2", _id:2, creator:"John Doe", postImg:'https://image.cnbcfm.com/api/v1/image/105218402-Bill_Gates_Summer_Books_2018_Photo_Credit_The_Gates_Notes_LLC.jpg?v=1535732500&w=929&h=523'}], 
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
            state.posts = [...state.posts, action.payload];
        },
        updatePost: (state, action) => {
            state = state.map(post => post._id === action.payload._id);
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