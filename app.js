//To keep secure variable or keys out of the project
const dotnev = require('dotenv');
dotnev.config();

const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//To enable browser to acess resourse
app.use(cors());

//To parse the incoming request
app.use(express.json());

//Routes
const userRoutes = require('./routes/user');

//Routers
app.use('/', userRoutes);

//Listens to the connecton on specified port
const port = process.env.PORT || 4000;
mongoose
.connect(
  process.env.DB_DETAILS
)
.then(() => {
  app.listen(port, "0.0.0.0");
})
.catch(error => {
  console.log(error)
})
