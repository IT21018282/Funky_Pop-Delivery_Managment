const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(express.json());
//app.use(cors({origin:true,credentials: true}));



const PORT = process.env.PORT || 8070;

//Edit by kulanaka(cookie parser and cors added)


app.use(cookieParser());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, () => {
    useCreateIndex: true;
    useNewUrlParser: true;
    useUnifiedTopology: true;
    useFindAndModify: true;
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection establishment is successful!!!");
});

const driverRouter = require("./routes/driver-routes.js");
const deliveryRouter = require("./routes/deliveryroute.js");
app.use("/drivers",driverRouter);
app.use("/delivery",deliveryRouter);


app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});
