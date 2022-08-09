import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postModal: true, 
}

const postModal = createSlice({
    name: "postModal",
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            state.postModal = action.payload; 
        }
    }
}); 


// actions
export const {toggleModal} = postModal.actions;

// reducer 
export default postModal.reducer; 