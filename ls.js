const fs = require('fs');
module.exports = ls

function ls (cmd) {
  if (cmd === "ls") {
    fs.readdir("./", "utf8", (err,files) => {
      if (err) {
        throw err
      } else {
        process.stdout.write(files.join("\n") + "\n")
        process.stdout.write("\n prompt > ")
      }
    })
  }
}

