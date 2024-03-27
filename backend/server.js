const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

connectDB();

app.listen(PORT, ()=> {
    console.log('Server is running on port ${PORT}.');
});