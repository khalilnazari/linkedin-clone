const mongoose = require("mongoose"); 

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true
        }, 
        lastName: {
            type: String,
            require: true
        }, 
        email: {
            type: String,
            require: true, 
            unique: true
        }, 
        password: {
            type: String,
            require: true
        },
        profileImg: {
            type: String,
        },
        phoneNumber: {type: String,},
        occupation: {type: String,}, 

    }, {
        timestamps: true,
    }
); 

module.exports = mongoose.model("User", UserSchema); 