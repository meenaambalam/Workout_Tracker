// Require necessary npm packages
const express = require("express");  // routing
const logger = require("morgan");    // logging
const mongoose = require("mongoose"); // ODM (Object Data Modeling) for MongoDB NoSQL DB and NodeJs

// Setting up port
const PORT = process.env.PORT || 3000;
// Creating express app and configuring middleware 
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// MongoDB connection setup including for Heroku

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true,  useFindAndModify: false});

// For the mongoose Virtuals 
mongoose.set('toJSON',{virtuals: true});

// Requiring our api and html routes
require("./routes/api-route.js")(app);
require("./routes/html-routes.js")(app);

// Logging message upon successfully App listening on the PORT
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});