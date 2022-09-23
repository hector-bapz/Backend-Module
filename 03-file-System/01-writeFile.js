const fs = require("fs");

//crea un archivo
//fs.writeFile('nombre del archivo', 'contenido del archivo', callback(error))
fs.writeFile("koder.txt", "Hola Koders desde fs de node", (error) => {
  if (error) {
    console.log("Ha ocurrido un error: ", error);
    return;
  }
  console.log("Se ha creado el archivo! ;)");
});
