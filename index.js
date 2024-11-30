const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

const messages = [];

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = { app, messages };
