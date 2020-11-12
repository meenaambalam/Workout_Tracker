const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGOATLAS_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true,  useFindAndModify: false});

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true,  useFindAndModify: false});

mongoose.set('toJSON',{virtuals: true});

require("./routes/api-route.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});