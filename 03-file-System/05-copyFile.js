const fs = require("fs");

//copiar un archivo
//fs.copyFile(src = path del archivo a copiar, dest= path del destino[, mode], callback(error))
fs.copyFile("./koder.txt", "./prueba-copyFile/koder-copyFile.txt", (error) => {
  if (error) {
    console.log("Ha ocurrido un error: ", error);
    return;
  }
  console.log("¡archivo copiado!");
});
