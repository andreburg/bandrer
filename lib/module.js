const fs = require("fs");
const path = require("path");
const babelParser = require("@babel/parser");
const { transformFromAst } = require("@babel/core");

class Module {
  constructor(filename) {
    const file = fs.readFileSync(filename, "utf-8");
    const ast = babelParser.parse(file, { sourceType: "module" });
    this.filename = path.join(filename).replace(/\\/g, "/");
    let { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"],
    });
    this.dependencies = babelParser
      .parse(file, { sourceType: "module" })
      .program.body.filter((node) => node.type === "ImportDeclaration")
      .map((node) => {
        const absolutePath = path
          .join(path.dirname(filename), node.source.value)
          .replace(/\\/g, "/");
        code = new String(code).replace(node.source.value, absolutePath);
        return absolutePath;
      });
    this.code = code;
  }
}

module.exports = {
  Module,
};
