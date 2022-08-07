const mongoose = require("mongoose"); 

const PostSchema = new mongoose.Schema(
    {
        postText: {
            type: String,
            require: true
        }, 
        postImage: {
            type: String,
        }

    }, {
        timestamps: true,
    }
); 


module.exports = mongoose.model("Post", PostSchema); 