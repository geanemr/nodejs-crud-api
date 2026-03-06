require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hello World updated!!");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () =>
      console.log("Server is running on http://localhost:3000"),
    );
  })
  .catch(() => console.log("Connection failed!"));
