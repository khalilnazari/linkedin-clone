const router = require('express').Router();
const CryptoJS = require('crypto-js'); 
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

// Register 
const uniqueEmail = (req, res, next) => {
    // Check if email already exists in db
    User.findOne({ email: req.body.email }, (err, user) => {
        if(err) {
            res.status(500).json("Server error")
        }
    
        //if a user was found, that means the user's email matches the entered email
        if (user) {
            res.status(400).json("A user with that email has already registered. Please use a different email");
        } else {
            next(); 
        }
    }); 
}

router.post('/register', uniqueEmail, async (req, res) => {
    const {firstName, lastName, password, email, profileImg} = req.body; 
    const newUser = new User({
        firstName, 
        lastName, 
        email, 
        profileImg,
        password: CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()
    });

    try {
        const saveUser = await newUser.save(); 
        res.status(201).json({...saveUser, message: "Youre account is successfully created! Please login."}); 
    } catch (error) {
        res.status(500).json({message: "Server error"})
    } 
});

//  Signin
router.post('/login', async (req, res) => {

    // Check if credintial is sent
    const { email, password } = req.body; 
    if(email === undefined || password === undefined) return;


    // try & catch block
    try {
        // check if user exist 
        const userExist = await User.findOne({email});
        !userExist && res.status(401).json({message: "Credentials are incorrect!"}); 

        // check if password
        const encryptedPassword = CryptoJS.AES.decrypt(userExist.password, process.env.SECRET_KEY); 
        const originalPassword = encryptedPassword.toString(CryptoJS.enc.Utf8); 
        originalPassword !== req.body.password && res.status(401).json({message: "Credentials are incorrect!"}); 
        
        // setup access token
        const now = new Date().getTime(); 
        const tokenExpiryDate = now + 12*60*60*1000; 
        const accessToken = jwt.sign(
            {id:userExist._id}, 
            process.env.SECRET_KEY, 
            {expiresIn: tokenExpiryDate}
        ); 

        // Exclude password 
        const {password, ...user} = userExist._doc; 
        
        // response to client 
        res.status(200).send({...user, accessToken, timer: tokenExpiryDate}); 

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    } 
}); 


// update user
router.put('/update/:id', async (req, res) => {
    const id = req.params.id; 
    try {
        const updateUser = await User.findByIdAndUpdate(id, {$set: req.body});
        res.status(201).json(updateUser) 
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
})

// check if an object is empty; 
function isEmptyObj(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

module.exports = router; 