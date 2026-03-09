require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () =>
      console.log("Server is running on http://localhost:3000"),
    );
  })
  .catch(() => console.log("Connection failed!"));
