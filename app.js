const { createFile } = require("./helpers/multiplier");
const colors = require('colors')
const argv = require('./config/yargs')

console.clear();

createFile(argv.b, argv.l, argv.t)
     .then((fileCreated) => console.log(fileCreated.rainbow))
     .catch((err) => console.log(err));
