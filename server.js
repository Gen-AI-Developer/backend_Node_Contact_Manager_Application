const express = require("express");
const errorHandler = require("./middleware/erorrhandler");
const dotenv = require("dotenv").config();
const app = express();
// const port = 5000;
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactsRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`This Appication is running on Port: ${port}`)
})