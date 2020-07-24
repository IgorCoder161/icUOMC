const os = require("os");

console.log("Операционная система: ", os.platform());
console.log("Архитектура процессора: ", os.arch());
console.log("Инфа по CPU: ", os.cpus());
console.log("Свободная память: ", os.freemem());
console.log("Всего памяти: ", os.totalmem());
console.log("Имя ПК: ", os.hostname());
console.log("Домашняя директория: ", os.homedir());
console.log("ПК включе: ", os.uptime());
/*
console.log(": ", os.platform);
console.log(": ", os.platform);
console.log(": ", os.platform);
console.log(": ", os.platform);
console.log(": ", os.platform);
console.log(": ", os.platform);
console.log(": ", os.platform);

*/
