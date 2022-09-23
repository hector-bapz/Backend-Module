const fs = require("fs");

//eliminar un archivo.
//will not work on a directory, empty or otherwise. To remove a directory, use fs.rmdir().
//fs.unlink(path, callback)
fs.unlink("./koder.txt", (error) => {
  if (error) {
    console.log("Ha ocurrido un error: ", error);
    return;
  }
  console.log("¡archivo borrado!");
});
