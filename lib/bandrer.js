const { ModuleMap } = require("./module-map.js");
const fs = require("fs");

class Bandrer {
  constructor(config) {
    new ModuleMap(config.entry).compile(config.bundleDir, config.output);
    if (config.html) {
      const htmlFile = fs.readFileSync(config.html, "utf-8");
      try {
        fs.mkdirSync(config.bundleDir);
      } catch (e) {}
      fs.writeFileSync(`${config.bundleDir}/index.html`, htmlFile, {
        recursive: true,
      });
    }
  }
}

module.exports = {
  Bandrer,
};
