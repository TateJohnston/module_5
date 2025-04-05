const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const userRoutes = require("./routes/userRoutes");
swaggerDocument = require("./swagger.json");
const calculatorRoutes = require("./routes/calculatorRoutes");
const friendRoutes = require("./routes/friendRoutes");
const app = express();
const port = 3000;

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use("/user", userRoutes);
app.use("/calculator", calculatorRoutes);
app.use("/friends", friendRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.use(express.static("public"));
