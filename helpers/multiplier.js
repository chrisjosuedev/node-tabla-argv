const fs = require("fs");
const colors = require("colors");

const createFile = async (base, list, to) => {
    try {
        let output = "";

        for (let i = 1; i <= to; i++) {
            output += `${base} x ${i} = ${base * i}\n`;
        }

        // Sync await
        fs.writeFileSync(`./output/${base}-table.txt`, output);

        if (list) {
            console.log("===========================".green);
            console.log("      Tabla del".green, colors.blue(base));
            console.log("===========================".green);
            console.log(output.yellow);
        }

        return `${base}-table.txt created`;
    } catch (error) {
        throw error;
    }
};

module.exports = { createFile };
