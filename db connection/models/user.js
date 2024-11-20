//model folder is for storing models and schema 

//Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js, which allows you to model your data as objects and interact with MongoDB more easily


const mongoose = require('mongoose'); //This line imports the Mongoose library, which you will use to define the schema and interact with MongoDB.

const userSchema = new mongoose.Schema({//it accept onject
  username:String,
  email:String,
  password:String,
  //age :Number, 
  //gende :{type:String, enum:['male','female']},

})
//mongoose.Schema is a Mongoose class that is used to define the structure of the documents (data) that will be stored in a MongoDB collection.
//A Mongoose schema is an object that defines the structure of the documents within a collection. The schema defines: The fields (attributes or columns) of the documents.
// The schema is a JavaScript object where:
// The keys represent the field names (e.g., username, email, password).
// The values represent the data types or constraints for each field.

//for implementing this schema you have to use a model method
//const userModel = mongoose.model("model_name" , schema_name)


const userModel = mongoose.model('user' , userSchema)
//userModel is now a constructor function for interacting with the users collection. For instance, you can use it to find users, add new users, or update existing users.
//mongoose.model() is a method provided by Mongoose to create a model based on a schema.

// A model is a constructor function that allows you to interact with a specific MongoDB collection. It provides you with methods to perform CRUD (Create, Read, Update, Delete) operations on the documents in that collection.

// Arguments:  'user': This is the name of the model. It will be used to create a collection in the database (with a lowercase plural form). For example, the model 'user' will correspond to a MongoDB collection called users (Mongoose automatically pluralizes the model name).
// userSchema: This is the schema that defines the structure of the documents in the users collection. It includes fields like username, email, and password, and any validation rules you set (such as enum for gender).
// What this does:

// This creates a Mongoose model named userModel. You can use this model to create, read, update, and delete documents in the users collection of your MongoDB database.

module.exports = userModel;
//module.exports is a Node.js feature that allows you to export objects, functions, or variables from a module so they can be accessed in other files.
