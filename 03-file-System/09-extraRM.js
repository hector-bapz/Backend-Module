const fs = require("fs");

//removes files and directories
//fs.rm(path[, options], callback)
fs.rm("./mkdirFS", { recursive: true }, (error) => {
  if (error) {
    console.log("Ha ocurrido un error: ", error);
    return;
  }
  console.log("¡mkdirFS eliminado!");
});

fs.rm("./mkdirFS2", { recursive: true }, (error) => {
  if (error) {
    console.log("Ha ocurrido un error: ", error);
    return;
  }
  console.log("¡mkdirFS2 eliminado!");
});
