const fs = require("fs");

deleteKoder(6);

function deleteKoder(id) {
  fs.readFile("./koders.json", "utf8", (error, data) => {
    if (error) {
      console.log("Ha ocurrido un error: ", error);
      return;
    }

    const jsonData = JSON.parse(data);
    let koders = jsonData.koders;
    findKoder(koders, id)
  });
}

function findKoder(koders, id){
    for (let index = 0; index < koders.length; index++) {
        const element = koders[index];
        if(element.id == id){
            borrando(koders, index)
            break;
        }
    }
}

function borrando(koders, index){
    koders.splice(index, 1)
    createJSON(koders)
}

function createJSON(koders) {
  let objectKoder = { "koders": koders };
  let newJSON =  JSON.stringify(objectKoder, null, 2);
    fs.writeFile("./koders.json", newJSON,(error) => {
        if (error) {
          console.log("Ha ocurrido un error: ", error);
          return;
        }
      }
    );
}

