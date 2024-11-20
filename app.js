const express = require('express');
const app = express();
const userModel = require('./models/user');
const connection = require('./config/db')
// Middleware setup 
//these two user for post method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/",(req,res)=>{
  // console.log(req.query);
  // res.render("index.ejs");
  console.log("home page");
  res.send("home page");
});

// POST route for handling form data
app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Data received");  // Fixed the typo here
});

app.get('/register',(req,res)=>{
  res.render('register.ejs');
})//this will show form to register user or on webpage

app.post('/register',async (req,res)=>{
  // console.log(req.body);
  const {name,email,password} = req.body;//this is called destructuring 
  //userModel is user to perform the CURD operation
  await userModel.create({
    name:name,
    email:email,
    password:password,
  })//controller is present here till the user is created since we using async await
  res.send("user registered");
  // const new_user = await userModel.create({
  //   name:name,
  //   email:email,
  //   password:password,
  // })  // res.send(new_user);
})

// Set the app to listen on port 3000
app.listen(3000);
