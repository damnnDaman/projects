// const mongoose = require("mongoose");
// const plm = require("passport-local-mongoose");
// ///connecting with the local database
// mongoose.connect("mongodb://localhost:27017/pinterestClone");

// //creating a schema 
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
  
//   password: {
//     type: String,
   
//   },
//   posts: [{ //array of post id
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "post",
//   }],
//   dp: {
//     type: String  //Assumng profile picture is stored as a URL or file path
//   },
//   email: {
//     type: String,
   
//     unique: true
//   },
//   fullname: {
//     type: String,
    
//   }
  
// });

// userSchema.plugin(plm); // This plugin will add passport-local fields to our user schema

// module.exports = mongoose.model("user", userSchema);





const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb");

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "Daman",
  email: "tzirw@example.com",
  password: "123123",
});

user.save();
