const { Module } = require("./module.js");
const path = require("path");
const fs = require("fs");

class ModuleMap {
  constructor(entryFile) {
    this.entry = path.join(entryFile).replace(/\\/g, "/");
    this.map = {};
    this.modules = "";
    this.bundle(entryFile);
  }

  bundle(filename) {
    let module = new Module(filename);
    this.modules += `'${module.filename}': [
      0,
      { exports : {} },
      function(require, module, exports) {
        ${module.code}
      }
    ],`;
    this.map[module.filename] = module.code;
    module.dependencies.forEach((mod) => {
      if (!this.map[mod]) this.bundle(mod);
    });
  }

  compile(dirName = "dist", outputFile = "main.js") {
    const result = `
    (function(modules) {
      function require(path) {
        const [status, module, fn] = modules[path];
        console.log(path);
        console.log(module);
        if(!status){
          fn(require, module, module.exports);
          modules[path][0] = 1;
          modules[path][1] = module.exports;
        }
        return module.exports;
      }
      require("${this.entry}");
    })({${this.modules}})
  `;
    try {
      fs.mkdirSync(dirName);
    } catch (e) {}
    fs.writeFileSync(`${dirName}/${outputFile}`, result, { recursive: true });
  }
}

module.exports = {
  ModuleMap,
};
