const fs = require("fs");
console.log(__dirname);
var dirpath = path.join(__dirname, "test");
var filepath = path.join(dirpath, "text.txt");
console.log("FILEPATH: ", filepath);

fs.exists(filepath, exists => {
    if (exists) {
      console.log("Файл существует.");
      fs.readFile(filepath, "utf-8", (err,content) => {
        if (err) throw err;
        console.log("Content: ", content);
        console.log("Content: " + content);
      });
    } else {
        console.log("Файл НЕ существует.");
     }  
}          