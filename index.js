const { config } = require("./bandrer.config");
const { Bandrer } = require("./lib/bandrer");
const path = require("path");
const express = require("express");
const app = express();

let bandrer = new Bandrer(config);
const port = config.port || 3000;

app.use(express.static(path.join(__dirname, "/dist")));

config.serves.forEach((dir) => {
  app.use(dir.at, express.static(path.join(__dirname, dir.dir)));
});

app.get("*", (req, res) => {
  if (config.html) {
    res.sendFile(path.join(__dirname, "/dist", "/index.html"));
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
