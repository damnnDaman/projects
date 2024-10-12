const mongoose = require("mongoose");

///connecting with the local database
mongoose.connect("mongodb://localhost:27017/pinterestClone");


//creating a schema
const postSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Array,
        default: []
    }
})

//create the post model

module.exports = mongoose.model("post", postSchema);
