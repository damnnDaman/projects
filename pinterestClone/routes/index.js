// var express = require('express');
//var router = express.Router();
// const userModel = require("./users");
// const postModel = require("./post");
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const localStrategy = require("passport-local");
// const { default: mongoose } = require('mongoose');

// let app = express();
// app.set("view engine", "ejs");

// // Middleware to parse URL-encoded bodies (as sent by HTML forms)
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", async function (req, res) {
  //   // res.json(await userModel.find());
  //   res.render("signup");
  
  // });

  // app.get("/login", function (req, res) {
    //   res.render("login");
    // })
// // get the create page
// app.get("/submit", async function (req, res, next) {
  //   const createdUser = await userModel.create({
    //     username: req.body.username,
    
    //     password: req.body.password,
    //     posts: [],
    //     email: req.body.email,
    //     fullname: req.body.fullname,
    //   });
    //   res.send(createdUser);
    // });
    
    // app.get("/createPost", async function (req, res, next) {
      //   const createdPost = await postModel.create({
        //     postText: "second post",
        //     user: "66801aa8630af433b3ae12c9",
        //   });
        
        //   let user = await userModel.findOne({ _id: "66801aa8630af433b3ae12c9" });
        //   user.posts.push(createdPost._id);
        //   await user.save();
        //   res.send("done");
        // })
        
        // //to see all the users
        // app.get("/allpost",async function (req, res) {
          //   res.json(await postModel.find());
// });

// app.get("/allUsers", async function (req, res) {
  //   res.json(await userModel.find());
  
  // });
  
  // app.get("/alluserposts", async function (req, res) {
    //   let user = await userModel.findOne({ _id : "667f310840e6d6d7d7c3760d" })
    //     .populate("posts");
    //   res.send(user);
    // })
    
    
// app.post("/register", function (req, res) {
  //   const userData = new userModel({
    //     username: req.body.username,
    //     fullname: req.body.fullname,
    //     email: req.body.email,
    //   });
    //   userModel
    //     .register(userData, req.body.password)
    //     .then(function () {
      //       passport.authenticate("local")(req, res, function () {
//         res.redirect("/profile");
//       });
//     })
// });



// app.post("/login", passport.authenticate("local", {
//   successRedirect: "/profile",
//   failureRedirect: "/login"
// }), function (req, res) {
//   console.log("hi");
// })

// app.get("/profile", (req, res) => {
  //   if (req.isAuthenticated()) {
    //     res.send("Welcome to your profile!");
//   } else {
//     res.redirect("/login");
//   }
// });



// app.get("/logout", function (req, res) {
//   req.logout(function (err) {
//     if (err) { return next(err); }
//     res.redirect("/");
//   });
// })

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect("/");
// }


// module.exports = app;

// async function getAnimalData() {
//   const response = await fetch("https://fakerapi.it/api/v1/persons");
//   response.json().then((data) => {
//     console.log(data);
//   });
// }



const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
console.log("jhih");
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExits = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      userExists = true;
      return userExists;
    }
  }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
