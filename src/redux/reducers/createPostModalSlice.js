import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleModal: true, 
    editPostData: {} 
}

const createPostModalSlice = createSlice({
    name: "postModal",
    initialState,
    reducers: {
        togglePostModal: (state, action) => {
            state.toggleModal = action.payload.toggleModal; 
            state.editPostData = action.payload.editPostData; 
        }
    }
}); 


// actions
export const {togglePostModal} = createPostModalSlice.actions;

// reducer 
export default createPostModalSlice.reducer; 