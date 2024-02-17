const config = {
  entry: "client/public/js/index.js",
  output: "main.js",
  bundleDir: "./dist",
  html: "client/index.html",
  port: 8888,
  serves: ["client/public/css"],
};

module.exports = {
  config,
};
