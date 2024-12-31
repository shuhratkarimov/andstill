const fs = require("fs");

function write_File(file, data) {
 return fs.writeFile(`./database/${file}`, JSON.stringify(data, null, 4), "utf-8", (err) => {
    if (err) throw "Ma'lumotni yozishda xatolik!";
  });
}

function read_File(file) {
  return JSON.parse((fs.readFileSync(`./database/${file}`, "utf-8")));
  }

module.exports = {
  write_File,
  read_File,
};
