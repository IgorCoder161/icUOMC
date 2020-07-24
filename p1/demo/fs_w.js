const fs = require("fs");
const path = require("path");

console.log(__dirname);
var dirpath = path.join(__dirname, "test");
var filepath = path.join(dirpath, "text.txt");
console.log("FILEPATH: ", filepath);

/*
fs.stat(filepath, (err) => {
  if (!err) {
    console.log("1111");
  } else {
    console.log("2222");
    fs.Stats;
  }
});
*/
function pfile() {
  fs.exists(filepath, (exists) => {
    if (exists) {
      console.log("Файл существует.");
      fs.appendFile(filepath, "\nНовая строка 2", (err) => {
        if (err) throw err;
        console.log("В файл добавлена запись.");
      });
    } else {
      console.log("Файл НЕ существует.");
      fs.writeFile(filepath, "Запись в файл.", (err) => {
        if (err) {
          console.log("Ошибка1");
        } else {
          console.log("Файл создан");
        }
      });

      /*
      fs.open(filepath, "r", (err, fd) => {
        if (!err) {
          console.log("Файл открыт");
          fs.close(fd);
          console.log("Файл закрыт");
        } else {
          console.log("Ошибка2");
        }
      });
      */
    }
  });
}

try {
  fs.stat(dirpath, (err) => {
    if (!err) {
      console.log("Папка существует.");
      pfile();
    } else {
      console.log("Папка НЕ существует.");
      console.log("Создаем папку...");
      console.log("FILEPATH: ", dirpath);
      fs.mkdir(dirpath, (err) => {
        if (err) {
          throw err;
        } else {
          console.log("Папка создана.");
          pfile();
        }
      });
    }
  });
} catch (err) {
  console.log("ERRRRRRRRRRR");
}

/*
if (true) {
  console.log("true");
} else {
  console.log("asdsad");
}

((true) ? console.log("true") : console.log("false"))
((true) && console.log("true"));
*/
/*
fs.exists(filepath, function (exists) {
  if (exists) {
    console.log("Файл существует.");
  } else {
    console.log("Файл НЕ существует.");
  }
});

fs.mkdir(path.join(__dirname, "test"), (err) => {
  if (err) {
    throw err;
  }
  console.log("Папка создана");
});

//fs.writeFile(filepath, "Hello Nodejs");
*/
