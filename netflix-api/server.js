const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
    
    app.use(cors());
    app.use(express.json());

    app.listen(5000, console.log("Server Started..."))