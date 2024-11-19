const http = require('http');


const express  = require('express');//Before this line, you typically need to import Express by npm i express
//This instance, stored in the app variable, will be used to define routes, middleware, and other application settings. 
//With this instance, you can set up your server by defining how it should respond to various HTTP requests (GET, POST, etc.) and configuring middleware (like express.json())
//express is like to http but more powerful and useful in creating server
const app = express(); //app is the server and it is created by express and it is used to handle the request and response of the server and use to excess other method present in server

app.use(express.json())// this is used to parse the json data in the request body as express can not read the data comming from the frontend in json format so we need to parse it and this is done by express.json()
//Middleware Function: express.json() is a built-in middleware function that processes incoming requests before they reach your route handlers.
//It parses the JSON data in the request body and makes it accessible in req.body. Without this middleware, you would not be able to directly access JSON data sent in requests, which is common in APIs.


app.use(express.urlencoded({extended:true}));
//The line app.use(express.urlencoded({ extended: true })); is another piece of middleware used in an Express application. Here’s what it does:

//URL-Encoded Data Parsing: This middleware is specifically for parsing data sent in URL-encoded format, which is the default format for form submissions in HTML.

//Extended Option: The extended: true option allows for rich objects and arrays to be encoded into the URL-encoded format, using the qs library. This means you can send nested objects, which is more flexible than using the default querystring library when extended is set to false.

//Accessing Parsed Data: After this middleware processes the incoming request, the parsed data will be available in req.body. This is useful for handling form submissions and other types of data sent via POST requests.
//This middleware is used to parse the data coming from the frontend in the form of url encoded format

app.set("view engine", 'eja');
//The line app.set("view engine", 'ejs'); (note that it should be 'ejs', not 'eja') is used to set the template engine for rendering views in an Express application. Here’s a breakdown of what it does:

//View Engine Configuration: This line tells Express to use EJS (Embedded JavaScript) as the templating engine for rendering HTML views.

//Rendering Views: When you render a view using res.render(), Express will look for the specified template files (usually with a .ejs extension) in the views directory and process them using EJS.

//Dynamic Content: EJS allows you to embed JavaScript code in your HTML, which enables you to generate dynamic content based on data passed to the view.


app.use(express.static('public'));
//The line app.use(express.static('public')); in an Express.js application is used to serve static files, such as HTML, CSS, JavaScript, images, and other assets, from a directory on the server. Here’s a breakdown of what’s happening:
//express.static: This is a built-in middleware function in Express. It serves static files from a specified directory.
//'public': This is the name of the directory that contains the static files. In this case, the server will look for a directory named public in the root of the project.
//app.use(...): The use method is how middleware is added to an Express application. By calling app.use(express.static('public'));, you tell Express to serve any static files found in the public folder when users request them.


app.get("/",(req,res)=>{
  res.render("index.ejs");
})

app.post("/get-form-data",(req,res)=>{
  console.log(req.body);
  res.send("data received");
})



app.listen(3000)