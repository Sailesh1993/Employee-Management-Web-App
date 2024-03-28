const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const connectDB = require("./src/config/db")
const userRoutes = require('./src/routes/userRoutes')

//Initialize Express app
const app = express();
const PORT = process.env.PORT || 8080;

//Middleware
app.use(cors());
app.use(express.json());

connectDB();
app.use('/', userRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
});