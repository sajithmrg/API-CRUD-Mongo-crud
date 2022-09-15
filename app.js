const express = require("express");
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
const app = express();
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
  
// app.get("/employee", (req, res) => {
//   res.send("employee work");
// });
const connectDB = require('./config/db');
// Load Config
dotenv.config({path: './config/config.env'})

connectDB();

// routes
app.use('/',require('./routes/index'));
app.listen(3000);
