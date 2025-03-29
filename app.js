const express = require("express");
const app = express();
const port = 3000;
// map all routes to the express app
const calculatorRoutes = require("./routes/calculatorRoutes");
const userRoutes = require("./routes/userRoutes");
const testRoutes = require("./routes/testRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/calculator", calculatorRoutes);
app.use("/mytest", testRoutes);
app.use("/products", productRoutes);
app.use("/user", userRoutes);

// export the app
module.exports = app;
