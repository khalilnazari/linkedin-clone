import axios from 'axios'; 

// register 
export const signup = (data) => axios.post('/auth/register', data); 

// login
export const signIn = (data) => axios.post('/auth/login', data); 

// getusers
export const updateProfile = (data, id) => axios.put('/auth/update/'+id, data); 


// post
export const fetchPosts = () => axios.get('/post'); 
export const fetchPost = (id) => axios.get('/post/'+id); 
export const createPostAPI = (post) => axios.post('/post', post); 
export const updatePostAPI = (post) => axios.put('/post', post); 
export const deletePost = (id) => axios.delete('/post/'+id); 