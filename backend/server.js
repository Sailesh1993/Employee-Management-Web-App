const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var corsOptions = {
    origin: "http://localhost:5001"
};

app.use(cors(corsOptions));

//parse requests of content-type- applications/json
app.use(bodyParser.json());

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to ERP application"})
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});