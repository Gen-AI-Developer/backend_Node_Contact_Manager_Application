const express = require("express");
const errorHandler = require("./middleware/erorrhandler");
const { connectDB } = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();
// const port = 5000;

connectDB()
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactsRoutes"));
//app.use(errorHandler)

app.listen(port, () => {
    console.log(`This Appication is running on Port: ${port}`)
})