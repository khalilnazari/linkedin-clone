const mongoose = require("mongoose"); 

const PostSchema = new mongoose.Schema(
    {
        postText: {
            type: String,
            require: true
        }, 
        postImage: {
            type: String,
        }, 
        creatorId: {
            type: String, 
            require: true, 
        }, 
        creatorName: {
            type: String, 
            require: true, 
        }, 
        creatorAvatar: {
            type: String, 
            require: true, 
        }, 
        creatorOccupation: {
            type: String, 
            require: true, 
        }
    }, {
        timestamps: true,
    }
); 


module.exports = mongoose.model("Post", PostSchema); 