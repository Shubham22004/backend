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


//READ OPERATION =================================
app.get('/get-user',(res,req)=>{
  userModel.find().then((user)=>{
    res.send(user);
})
})
//find method is used to get all the data from the database and help in displaying the data on webpage also you can give condition in find method to get the data of specific user like find({name:"user1"}) to get the data of user1 and if the user is not present then it return empty array

app.get('/get-user',(res,req)=>{
  userModel.findOne().then((user)=>{
    res.send(user);
})
});
// findOne({name:"user1"}) to get the data of one user even if we have multiple user of same name and  if the user is not present then it return null


//update user =====================================
app.get('/update-user',async (req,res)=>{
  await userModel.findOneAndUpdate({
    name:'a'
  },{
    email:"abc@world.com"
  })
  res.send("user update")
})

//deleting user=====================
app.get('/delete-user',async (req,res)=>{
  await userModel.findOneAndDelete
  ({
    name:'a'
  })
    res.send("user deleted")
})

// Set the app to listen on port 3000
app.listen(3000);
