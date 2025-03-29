const express = require("express");
const app1 = express();
const app2 = express();
const port1 = 3000;
const port2 = 3001;

app1.get("/test1", (req, res) => {
  res.send("Testing app 1");
});
app2.get("/test2", (req, res) => {
  res.send("Testing app 2");
});

app1.listen(port1, () => {
  console.log(`Listening at http://localhost:${port1}`);
});
app2.listen(port2, () => {
  console.log(`Listening at http://localhost:${port2}`);
});
