//Import modules
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//Import Rotes
const routes = require("./routes");

//Construct aplication
const app = express();

// Understanding req in json
app.use(bodyParser.json());
// Understanding params via url
app.use(bodyParser.urlencoded({ extended: false }));
// Working with cookies
app.use(cookieParser());

app.use(routes);

app.listen(3333);
