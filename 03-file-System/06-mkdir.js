const fs = require("fs");

//creates ONE directory
//fs.mkdir(path[, options], callback)
fs.mkdir("./mkdirFS", (error) => {
  if (error) {
    console.log("Ha ocurrido un error: ", error);
    return;
  }
  console.log("¡Directorio creado!");
});

//creates multiples directories
// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
fs.mkdir(
  "./mkdirFS2/anotherMkdirFS/finalFolderMKDIR",
  { recursive: true },
  (error) => {
    if (error) {
      console.log("Ha ocurrido un error: ", error);
      return;
    }
    console.log("¡Directorios creados!");
  }
);
