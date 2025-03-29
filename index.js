const express = require("express");
const cors = require("cors"); // Import cors
const calculatorRoutes = require("./routes/calculatorRoutes");
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.use(express.static("public"));
