const fs = require("fs");

//Reads the contents of a directory
//fs.readdir(path[, options], callback)
fs.readdir("./mkdirFS2/anotherMkdirFS/finalFolderMKDIR/", (error, files) => {
  if (error) {
    console.log("Ha ocurrido un error: ", error);
    return;
  }
  console.log(files);
});
