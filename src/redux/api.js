import axios from 'axios'; 

// register 
export const signup = (data) => axios.post('/auth/register', data); 

// login
export const signIn = (data) => axios.post('/auth/login', data); 

// getusers
export const getUsers = () => axios.get('/auth/'); 


// post
export const getPosts = () => axios.post('/post'); 
export const getPost = (id) => axios.post('/post/'+id); 
export const createPost = (post) => axios.post('/post', post); 
export const updatePost = (post) => axios.post('/post', post); 
export const deletePost = (id) => axios.post('/post/'+id); 