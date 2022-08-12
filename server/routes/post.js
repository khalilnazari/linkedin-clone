const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { findByIdAndUpdate } = require('../models/Post');
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
router.put('/', async (req, res) => {
    const {_id, ...rest} = req.body; 
    try {
        const response = await Post.findByIdAndUpdate(_id, {$set: rest}); 
        res.status(201).json(response); 
    } catch (error) {
        res.status(500).json(error); 
    } 
})


router.delete('/:id', (req, res) => {
    try {
        res.status(201).json(req.body)
    } catch (error) {
        res.status(500).json({message: "Server error"})
    } 
})


module.exports = router; 