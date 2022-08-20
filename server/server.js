const express = require('express'); 
const app = express(); 
require('dotenv').config();
const mongoose = require("mongoose"); 

// accept json data
app.use(express.json());

// routes
const authRoute = require('./routes/auth'); 
const postRoute = require('./routes/post'); 

// use routes 
app.use('/api/auth', authRoute); 
app.use('/api/post', postRoute); 


// mongodb server connection 
const mongodbUrl = process.env.MONGODB_URL; 
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology : true,
})
.then(() => console.log("DB connected Successfully!"))
.catch(err=>console.log(err))

// port 
const PORT = process.env.PORT; 
app.listen(PORT, () => console.log('Server is runinig on '+PORT))