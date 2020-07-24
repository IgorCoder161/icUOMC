const path = require("path");

console.log("");
console.log("Начало");
console.log("Название файла: ", path.basename(__filename));
console.log("");
console.log("Имя директории: ", path.dirname(__filename));
console.log("");
console.log(t);
var t = path.join(__dirname, "test", "text.txt");
console.log("T: ", t, t.length, path.parse(t).name.length);

console.log(path.parse("1qwe").length);
console.log("Расширение файла: ", path.extname(__filename));
console.log("");
console.log("Parse: ", path.parse(__filename).name);
console.log("");
console.log("FileName: ", __filename);
console.log("");
console.log("DirName: ", __dirname);
console.log("");
console.log(path.join(__dirname, "server", "index.html"));
console.log("Конец");
