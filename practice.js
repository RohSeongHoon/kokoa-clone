const express = require("express");
const app = express();
const port = 3000;

app.get("/123", function (req, res) {
  res.send("World1");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
