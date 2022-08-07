const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');

router.post('/', (req, res) => {
    try {
        res.status(201).json(req.body)
    } catch (error) {
        res.status(500).json({message: "Server error"})
    } 
})


router.get('/', (req, res) => {
    try {
        res.status(201).json(req.body)
    } catch (error) {
        res.status(500).json({message: "Server error"})
    } 
})

router.get('/:id', (req, res) => {
    try {
        res.status(201).json(req.body)
    } catch (error) {
        res.status(500).json({message: "Server error"})
    } 
})


router.put('/:id', (req, res) => {
    try {
        res.status(201).json(req.body)
    } catch (error) {
        res.status(500).json({message: "Server error"})
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