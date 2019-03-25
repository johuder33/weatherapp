var fs = require("fs");
var path = require("path");

const addProxyToPackage = () => {
  const dir = process.cwd();
  const filePath = path.resolve(dir, "package.json");
  const packageJSON = fs.readFileSync(filePath, "utf8");
  const package = JSON.parse(packageJSON);

  const proxy = process.env.SERVICE_URL;

  package.proxy = proxy;

  fs.writeFileSync(filePath, JSON.stringify(package, null, 2));

  console.log(`Written proxy [${proxy}] at package.json`);
};

addProxyToPackage();
