const fs = require("fs");

//lee un archivo
//fs.readFile(path, codificador, callback(error, data = el texto del archivo))
fs.readFile("./koder.txt", "utf8", (error, data) => {
  if (error) {
    console.log("Ha ocurrido un error: ", error);
    return;
  }
  console.log(data);
});
