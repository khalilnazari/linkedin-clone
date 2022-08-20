const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');

router.post('/', async (req, res) => {
    try {
        const savePost = new Post(req.body); 
        const response = await savePost.save(); 
        res.status(201).json(response); 
    } catch (error) {
        res.status(500).json({message: "Server error"})
    } 
})

// Fetch all posts 
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({$natural:-1}); 
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({message: "Server error"})
    } 
})

// Fetch one posts 
router.get('/:id', (req, res) => {
    try {
        res.status(201).json(req.body)
    } catch (error) {
        res.status(500).json({message: "Server error"})
    } 
})

// update post
router.put('/:id', async (req, res) => {
    try {
        const response = await Post.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        ); 
        res.status(201).json(response); 
    } catch (error) {
        res.status(500).json(error); 
    } 
})

// Delete post.
router.delete('/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id); 
        res.status(201).json("The post has been successfully delete!")
    } catch (error) {
        res.status(500).json({message: "Server error"})
    } 
})


module.exports = router; 