const express = require("express");
const app = express();
const app2 = express();
const app3 = express();
const port = 3002;
const portTwo = 3005;
const portThree = 3010;

app.use("/", express.static("public"));

app.get("/test", (req, res) => {
  res.send([
    { name: "Tate", age: 27 },
    { name: "Britt", age: 33 },
    { name: "Gabbi", age: 31 },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
