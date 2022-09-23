const fs = require("fs");

//agrega contenido a un archivo
//fs.appendFile(path, nuevo data, callback(error))
fs.appendFile(
  "./koder.txt",
  " => estoy agregando nuevo texto desde appendFile.js c:",
  (error) => {
    if (error) {
      console.log("Ha ocurrido un error: ", error);
      return;
    }
  }
);

fs.readFile("./koder.txt", "utf8", (error, data) => {
  if (error) {
    console.log("Ha ocurrido un error: ", error);
    return;
  }
  console.log(data);
});
