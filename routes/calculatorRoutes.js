const express = require("express");
const calculatorController = "../controllers/calculatorController.js";
const router = express.Router();

router.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});
router.get("/multiply", (req, res) => {
  calculatorController.multiplyNumbers(req, res);
});

module.exports = router;
