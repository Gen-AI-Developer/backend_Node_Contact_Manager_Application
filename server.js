const express = require("express")
const dotenv = require("dotenv").config();
const app = express();
// const port = 5000;
const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactsRoutes"));

app.listen(port, () => {
    console.log(`This Appication is running on Port: ${port}`)
})