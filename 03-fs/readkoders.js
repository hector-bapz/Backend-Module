const fs = require("fs");

function readKoder() {
  fs.readFile("./koders.json", "utf8", (error, data) => {
    if (error) {
      console.log("Ha ocurrido un error: ", error);
      return;
    }
    console.log(data);
  });
}

readKoder();
