const fs = require("fs");
const path = require("path");

const notes = "./db.json";

const writeNotesToDbJson = postNewNote => {
    try {
        fs.writeFileSync(path.join(__dirname, notes), JSON.stringify(postNewNote), 'utf8');
    } catch (error) {
        console.error('error occurred while writing to the Db.json file: ', error);
    }
};

module.exports = writeNotesToDbJson;
  