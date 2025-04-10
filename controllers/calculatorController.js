const addNumbers = (req, res) => {
  const number1 = parseInt(req.query?.num1) || 0;
  const number2 = parseInt(req.query?.num2) || 0;
  const result = number1 + number2;
  console.log("result:", result);
  res.status(200);
  res.send({ result });
};

const subtractNumbers = (req, res) => {
  const number1 = parseInt(req.query?.num1) || 0;
  const number2 = parseInt(req.query?.num2) || 0;
  const result = number1 - number2;
  console.log("result", result);
  res.status(200);
  res.send({ result });
};

const multiplyNumbers = (req, res) => {
  const number1 = parseInt(req.query?.num1) || 0;
  const number2 = parseInt(req.query?.num2) || 0;
  const result = number1 * number2;
  console.log("result", result);
  res.status(200);
  res.send({ result });
};

const divideNumbers = (req, res) => {
  const number1 = parseInt(req.query?.num1) || 0;
  const number2 = parseInt(req.query?.num2) || 0;
  const result = number1 / number2;
  console.log("result", result);
  res.status(200);
  res.send({ result });
};

module.exports = {
  addNumbers,
  multiplyNumbers,
  subtractNumbers,
  divideNumbers,
};
