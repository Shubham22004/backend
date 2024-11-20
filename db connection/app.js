const express = require('express');
const app = express();
const userModel = require('./models/user');
const connection = require('./config/db')
// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/",(req,res)=>{
  console.log(req.query);
  res.render("index.ejs");
});

// POST route for handling form data
app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Data received");  // Fixed the typo here
});

// Set the app to listen on port 3000
app.listen(3000);
