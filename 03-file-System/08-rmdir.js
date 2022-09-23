const fs = require("fs");

//Removes directory
//fs.rmdir(path[, options], callback)
fs.rmdir("./mkdirFS", { recursive: true }, (error) => {
  if (error) {
    console.log("Ha ocurrido un error: ", error);
    return;
  }
  console.log("¡mkdirFS eliminado!");
});

fs.rmdir("./mkdirFS2", { recursive: true }, (error) => {
  if (error) {
    console.log("Ha ocurrido un error: ", error);
    return;
  }
  console.log("¡mkdirFS2 eliminado!");
});
