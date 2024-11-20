// config folder is for configuration files like database connection 

const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/men').then(()=>{
  console.log('connected to database');
});
//The code snippet you provided establishes a connection to a MongoDB database using Mongoose, a popular ODM (Object Data Modeling) library for MongoDB in Node.js

//mongoose.connect(): This function establishes a connection to a MongoDB database using the connection string passed as an argument.
//The connection string here is 'mongodb://localhost:27017/men', which specifies:
//mongodb:// – The protocol used to connect to a MongoDB server.
//localhost:27017 – The host and port of the MongoDB server: localhost refers to the local machine where the MongoDB instance is running.
//27017 is the default port that MongoDB listens to.
// "/men" – This specifies the name of the database you want to connect to. In this case, the database is named men. If the database doesn't exist, MongoDB will create it when you first store data in it.
// Note: You can replace localhost with the IP address or hostname of a remote MongoDB server if needed. For example:

// mongodb:// <host>:<port>/men for a remote MongoDB.
// mongodb+srv://  for connecting to a MongoDB Atlas cloud database.
module.exports = connection;