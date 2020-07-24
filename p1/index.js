//const chalk = require("Chalk");
//const text = require("./data");

//console.log(chalk.blue("Hello NodeJS"));
//console.log(chalk.grey(text));

const http = require("http");
const fs = require("fs");
const path = require("path");

/*
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  console.log(req.url);
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  } else {
    fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  }
});
*/

const server = http.createServer((req, res) => {
  let ct = "text/html";
  let fp = req.url;
  if (fp === "/") {
    fp = "index.html";
  } else {
    let ext = path.extname(fp);

    switch (ext) {
      case ".css":
        ct = "text/css";
        break;
      case "js":
        ct = "text/js";
        break;
      default:
        ct = "text/html";
    }

    if (!ext) {
      fp += ".html";
    }
  }

  fp = path.join(__dirname, "public", fp);
  console.log(fp);

  //console.log(fp);

  fs.readFile(fp, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error");
        } else {
          res.writeHead(200, { "Content-Type": ct });
          res.end(data);
        }
      });
    } else {
      res.writeHead(200, { "Content-Type": ct });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server has bin started on ${PORT}`);
});
