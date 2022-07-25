const argv = require("yargs")
    .options({
        'b': {
            alias: "base",
            type: "number",
            describe: "Table number",
            demandOption: true,
        },
        'l': {
            alias: "list",
            type: 'boolean',
            describe: "Show table list",
            default: false,
            demandOption: false
        },
        't': {
            alias: "to",
            type: 'number',
            describe: "Table limit number",
            default: 10,
            demandOption: false
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b) || isNaN(argv.t)) {
            throw "Base or To has to be a number";
        }
        return true;
    }).argv;

module.exports = argv